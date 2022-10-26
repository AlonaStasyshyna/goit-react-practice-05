import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from 'redux/books/books-slice';
import { selectBooks } from 'redux/books/books-selectors';

export const HomePage = () => {
    const books = useSelector(selectBooks);
    const dispatch = useDispatch()

    return (
        <ul>
            {books.map(({ id, title, author, img, plot }) => (
                <li key={id}>
                    <h2>{title}</h2>
                    <p>{author}</p>
                    <img src={img} alt={title} />
                    <p>{plot}</p>
                    <button type="button" onClick={() => dispatch(deleteBook(id))}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
