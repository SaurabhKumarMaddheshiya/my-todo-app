import React from 'react';

export default function Footer() {
    let footerStyle = {
        position : "relative",
        bottom: 0
    }
    return (
        <footer className="bg-dark text-light py-3">
            <p className="text-center" style={footerStyle}>
            Copyright &copy; MyTodosList.com
            </p>
        </footer>
    )
}
