import { Component } from "react";
import { Loader } from "./Loader/Loader";
import { fetchImages } from 'API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import css from './App.module.css';

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
                this.setState(() => {
                    return {
                        items: [...data.hits]
                    }
                }))
            .catch(error => {
                this.setState({ error })
            })
            .finally(() => this.setState({ loading: false }))
    }

    componentDidUpdate(_, prevState) {
        const { page, request } = this.state;
        if (prevState.page !== page || prevState.request !== request) {
            this.setState({ loading: true });
            fetchImages(request, page)
            .then(data =>
                this.setState(({items}) => {
                    return {
                        items: [...items, ...data.hits]
                    }
                }))
            .catch(error => {
                this.setState({ error })
            })
            .finally(() => this.setState({ loading: false }))
        }
    }

    loadMore = () => {
        this.setState(({ page }) => {
            return { page: page + 1 }
        })
    };

    goLargeImg = img => {
    this.setState({ largeImageURL: img });
    // this.onModalOpen();
  };

    
    render() {
        const { items, loading, error } = this.state;
        const isPosts = Boolean(items.length);
        const { loadMore } = this;
        return (
            <div className={css.App}>
                {loading && <Loader />}
                {error && <p>Restart page</p>}
                {isPosts && <ImageGallery items={items} goLargeImg={this.goLargeImg} />}
                {isPosts && <Button onClick={loadMore} />}
            </div>
      )
  }
}
