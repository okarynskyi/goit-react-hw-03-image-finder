import { Component } from "react";
import axios from 'axios';
import { Loader } from "./Loader/Loader";
import { ImageGallery } from './ImageGallery/ImageGallery'
// import css from './App.module.css';

export class App extends Component {
    state = {
        items: [],
        loading: false,
        error: null,
        page: 1,
        request: '',
        total: null,
        isOpenModal: false,
        largeImageURL: '',
    }

    componentDidMount() {
        this.fetchImages();
    }

    fetchImages() {
        const { page } = this.state;
        this.setState({loading: true});

        const API_KEY = '29400670-7ab87ece5bce46682a5958f07';
        axios.get(`https://pixabay.com/api/?q=cat&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(({data}) => 
                this.setState(({items}) => {
                    return {
                        items: [...items, ...data.hits]
                    }
                }))
            .catch(error => {
                this.setState({error})
            })
            .finally(() => this.setState({loading: false}))
    }

    
    render() {
        const { items, loading, error, page } = this.state;
        const isPosts = Boolean(items.length);
        return (
            <div>
                {loading && <Loader />}
                {error && <p>Restart page</p>}
                {isPosts && <ImageGallery items={items} goLargeImg={this.goLargeImg} />}
          </div>
      )
  }
}
