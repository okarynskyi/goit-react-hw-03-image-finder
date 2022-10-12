import { Component } from "react";
import { Loader } from "./Loader/Loader";
import { fetchImages } from 'API';
import { ImageGallery } from './ImageGallery/ImageGallery'
// import css from './App.module.css';

export class App extends Component {
    state = {
        items: [],
        loading: false,
        error: null,
        page: 1,
        request: 'cats',
        total: null,
        isOpenModal: false,
        largeImageURL: '',
    }

    componentDidMount() {
        const { page, request } = this.state;
        this.setState({ loading: true });
        
        setTimeout(() => {
            fetchImages(request, page)
                .then(data =>
                    this.setState(({ items }) => {
                        return {
                            items: [...items, ...data.hits]
                        }
                    }))
                .catch(error => {
                    this.setState({ error })
                })
                .finally(() => this.setState({ loading: false }))
        }, 500);
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
