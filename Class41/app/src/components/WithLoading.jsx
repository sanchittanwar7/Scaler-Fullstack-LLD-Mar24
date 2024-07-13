import React from "react";

const WithLoading = (WrappedComponent) => {
    return class Loading extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                data: null,
            };
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({ loading: false, data: 'API response' });
            }, 1000);
        }

        render() {
            if (this.state.loading) {
                return <h2>Loading...</h2>;
            }

            return <WrappedComponent {...this.state} />;
        }
    }
}

export default WithLoading;