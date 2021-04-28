import React, { Component } from 'react';
import AllBills from './AllBills';
import Header from './Header';
import FloatingMenu from './FloatingMenu';
import AddBill from './AddBill';
import update from 'immutability-helper';

export default class BillsApp extends Component {
	constructor() {
		super();
		this.state = {
			addBillOpen: false,
			allBills: [
				{
					business_name: 'geico',
					price: 50,
					status: 'unpaid'
				}
			]
		};
	}
	clickedAddBillBtn = () => {
		this.setState({
			addBillOpen: !this.state.addBillOpen
		});
	};
	saveBill = bill => {
		const newBills = update(this.state.allBills, {
			$push: [bill]
		});
		this.setState(
			{
				allBills: newBills,
				addBillOpen: !this.state.addBillOpen
			},
			() => {
				console.log(this.state);
			}
		);
	};
	changeBillStatus = billIndex => {
		const allBills = this.state.allBills;
		const bill = allBills[billIndex];
		if (bill.status == 'unpaid') {
			bill.status = 'paid';
		} else {
			bill.status = 'unpaid';
		}
		const newState = update(this.state, {
			allBills: {
				$set: allBills
			}
		});
		this.setState(newState, () => {
			console.log(this.state);
		});
	};
	deleteBill = billIndex => {
		const allBills = this.state.allBills;
		allBills.splice(billIndex, 1);
		const newState = update(this.state, {
			allBills: {
				$set: allBills
			}
		});
		this.setState(newState);
		console.log(this.state);
	};
	render() {
		return (
			<div id="BillsApp">
				<Header />
				<AllBills
					allBills={this.state.allBills}
					changeBillStatus={this.changeBillStatus}
					deleteBill={this.deleteBill}
				/>
				<AddBill
					addBillOpen={this.state.addBillOpen}
					saveBill={this.saveBill}
				/>
				<div className="content-background"></div>
				<FloatingMenu clickedAddBillBtn={this.clickedAddBillBtn} />
			</div>
		);
	}
}
