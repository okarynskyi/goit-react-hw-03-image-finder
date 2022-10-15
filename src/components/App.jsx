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
        request: 'fish',
        total: null,
        isOpenModal: false,
        largeImageURL: '',
    }

    componentDidMount() {
        const { page, request } = this.state;
        this.setState({ loading: true });
        
            fetchImages(request, page)
                .then(data =>
                    this.setState(prevState => {
                        return {
                            items: [ ...data.hits]
                        }
                    }))
                .catch(error => {
                    this.setState({ error })
                })
                .finally(() => this.setState({ loading: false }))
    }

    goLargeImg = img => {
    this.setState({ largeImageURL: img });
    // this.onModalOpen();
  };

    
    render() {
        const { items, loading, error } = this.state;
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
