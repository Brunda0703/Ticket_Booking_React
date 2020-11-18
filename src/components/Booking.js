import React , { Component } from 'react';

export class Booking extends Component {

    constructor(props) {

        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.state.value);
      }
    
      componentDidMount() {
    
        fetch('https://ticket-booking-api.herokuapp.com/tickets').then(res => res.json()).then(json => {
          this.setState({
            isLoaded: true,
            items: json,
            value: ''
          })
          document.getElementById('Name').value = '';
        })
      }

      bookSeat = () =>{

        fetch(`https://ticket-booking-api.herokuapp.com/tickets/${this.state.value}`).then(res => res.json()).then(seatid => {

            console.log("Seat ID",seatid[0]._id);
            let data = {
                Name: document.getElementById('Name').value,
                Seat_No: this.state.value,
                seat_id: seatid[0]._id,
                is_reset: true
              }
    
              fetch('https://ticket-booking-api.herokuapp.com/tickets',{
                  method: 'POST',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(data)
              }).then(res => res.json()).then(r=>{
                  console.log(r);
                  if(r){
                    this.setState({isLoaded: false});
                    this.componentDidMount();
                    alert('Successfully Booked');
                  }
              })
        })
      }

    render(){

        let { isLoaded, items, value } = this.state;

        let dropdown = () => {
            console.log(items.unbooked);
            return ( items.unbooked.map( elem => {
                return <option key={elem.id} value={elem.Seat_No}>{elem.Seat_No}</option>
            }))
        }

        if(!isLoaded)
            return <h1>Loading...</h1>

        else
            return (
                
                <div>
                    <h1>Booking Seats</h1>
                    <p>
                        <label>Name: <input type="text" id="Name"></input></label>
                    </p>
                    <label>
                    Pick your Seat Number:
                        <select value={value} onChange={this.handleChange}>
                            <option value='' >--select--</option>
                            {dropdown()}
                        </select>
                    
                    </label>
                    <button onClick={this.bookSeat}>Submit</button>
                </div>
            );
    }
}

export default Booking