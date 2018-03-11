import React from 'react';
import {connect} from 'react-redux';
import selectExpences from "../selectors/expences";
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../actions/filters";
import 'react-dates/initialize';
import  { DateRangePicker } from 'react-dates';
import {editExpence, removeExpence} from "../actions/expences";
// import  'react-dates/lib/css/_datepicker.css';

export class ExpenceListFilters extends React.Component {
    state = {
        calendarFocused: null,
    };

    onDatesChange = ( {startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if (e.target.value === 'date')
            this.props.sortByDate();
        else
            this.props.sortByAmount();
    };

    render() {
        const props = this.props;
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input className="text-input" placeholder="Search expences" type="text" value={props.filters.text} onChange={this.onTextChange} />
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={props.filters.sortBy} onChange={this.onSortChange}>
                            <option value='date'>Date</option>
                            <option value='amount'>Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                            startDateId="start_date_id" // PropTypes.string.isRequired,
                            endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                            endDateId="end_date_id" // PropTypes.string.isRequired,
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            showClearDates={true}
                            displayFormat="DD/MM/YYYY"
                            isOutsideRange={(day) => false }
                            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (date) => dispatch(setStartDate(date)),
    setEndDate: (date) => dispatch(setEndDate(date))
});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenceListFilters);
