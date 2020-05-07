import React, { Component } from 'react';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import userService from '../../utils/userService';

class EditProfilePage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.props.user,
    }

    formRef = React.createRef();

    //handle any changes to form if text changes
    handleChange = (evt) => {
        const formData = {...this.state.formData, [evt.target.name]: evt.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    }

    //handle any changes to form select boxes
    handleChangeSelectBox = (value, state) => {
        const formData = {...this.state.formData, [state]: value}
        this.setState({
            formData,
            invalid: !this.formRef.current.checkValidity()
        });
    }

    handleChangeMulti = (value, state) => {
        let sport_list =[];
        value.map(val => sport_list.push(val.value))
        const formData = {...this.state.formData, [state]: sport_list}
        this.setState({
            formData,
            invalid: !this.formRef.current.checkValidity()
        });
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        const body = this.state.formData;
        try {
            await userService.editProfile(body);
            this.props.handleUserStateChange(body);
            this.props.history.push('/profile');
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return(
            <div className="edit-page" style={{height: "90vh"}}>
                <EditProfileForm location={this.props.location}
                                 history={this.props.history}
                                 invalidForm={this.state.invalidForm} 
                                 formData={this.state.formData}
                                 handleChange={this.handleChange}
                                 handleChangeSelectBox={this.handleChangeSelectBox}
                                 handleChangeMulti={this.handleChangeMulti}
                                 handleSubmit={this.handleSubmit}
                                 formRef={this.formRef}
                />
            </div>
        );
    }
}

export default EditProfilePage;