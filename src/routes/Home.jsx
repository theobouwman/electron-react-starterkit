import React from 'react'
import BookMarksList from '../components/BookMarksList'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {

  }

  render() {
    return (
        <div>
          <h4>Home</h4>
          <BookMarksList />
        </div>
    )
  }
};

const style = {

}

export default Home;
