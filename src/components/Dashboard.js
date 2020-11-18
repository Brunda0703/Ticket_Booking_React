import React , { Component } from 'react';

export class Dashboard extends Component {

    constructor(props) {

        super(props);
        this.state = {
          items: [],
          isLoaded: false
        }
      }
    
      componentDidMount() {
    
        fetch('https://ticket-booking-api.herokuapp.com/tickets').then(res => res.json()).then(json => {
            console.log(json);
            this.setState({
                isLoaded: true,
                items: json
            })
        })
      }

      resetSeats = () =>{

        fetch('https://ticket-booking-api.herokuapp.com/tickets/reset').then(res=>res.json()).then(json=>{

            console.log(json);
            alert('Successfully Reset');
            this.setState({isLoaded: false});
            this.componentDidMount();
        })
      }
       
    render(){
        
        let { isLoaded, items } = this.state;
        let table = (result)  => {

            let head = (h) => {
                if( h.length > 0 && h[0].Name && h[0].Seat_No )
                    return (
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Seat_No</td>
                        </tr>
                    )
                else if( h.length > 0 )
                    return (
                        <tr>
                            <td>ID</td>
                            <td>Seat_No</td>
                        </tr>
                    )
                else
                        return (<tr>
                            <td>No Record</td>
                        </tr>)
            }

            let body = (b) => {

                return b.map( elem => {
                    
                    console.log('H',elem);
                    if( elem.Name && elem.Seat_No )
                    return (
                        <tr>
                            <td>{elem.id}</td>
                            <td>{elem.Name}</td>
                            <td>{elem.Seat_No}</td>
                        </tr>
                    )
                    else
                        return (
                            <tr>
                                <td>{elem.id}</td>
                                <td>{elem.Seat_No}</td>
                            </tr>
                        )
                        
                })
            }
            return (
                <table>
                <thead>{head(result)}</thead>
                <tbody>{body(result)}</tbody>
                </table>
            )
        }

        if( !isLoaded ){
        return <div>Loading...</div>
        }
        else{
        return (
            <div>
                <button onClick={this.resetSeats}>Reset</button>
                    {
                        Object.entries(items).map(item => {
                            return item.map(result =>{

                            if( result==='passangers' || result==='old_passangers' || result==='booked' || result==='unbooked' ){
                                return <h1>{result}</h1>
                            }
                            else{
                                
                                return <>{table(result)}</>
                            }})
                        })
                    }

            </div>
        );
        }
    }
}

export default Dashboard