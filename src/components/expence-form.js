import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import  { SingleDatePicker } from 'react-dates';

class ExpenceForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            description: props.expence ? props.expence.description :'',
            note: props.expence ? props.expence.note :'',
            amount: props.expence ? (props.expence.amount / 100).toString() : '',
            createdAt: props.expence ? moment(props.expence.createdAt) : moment(),
            calendarFocused: false,
            error: undefined
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ( {amount} ));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ( { createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ( { calendarFocused: focused }));
    };


    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ( { error: 'Please, provide description and amount' }));
        } else {
            this.setState(() => ( { error: undefined }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder='Descripion' autoFocus
                           value={this.state.description}
                           onChange={this.onDescriptionChange}
                    />
                    <input
                        type="number"
                        placeholder='Amount'
                        onChange={this.onAmountChange}
                        value={this.state.amount}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false }
                        id="datePicker"
                    />
                    <div>
                        <textarea placeholder='Add note here' value={this.state.note} onChange={this.onNoteChange} />
                    </div>
                    <button>Add expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenceForm;