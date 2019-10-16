import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ToDoForm from './ToDoForm/ToDoForm';


class Content extends React.Component {
    render() {
        return (
            <div>
            <Header />
            <ToDoForm />
            <Footer />
            </div>
        )
    }
}

export default Content;