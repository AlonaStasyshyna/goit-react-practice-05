import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addBook } from 'redux/books/books-actions';

export const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [img, setImg] = useState('');
  const [plot, setPlot] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'author':
        setAuthor(value);
        break;

      case 'img':
        setImg(value);
        break;

      case 'plot':
        setPlot(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newBook = {
      id: nanoid(),
      title,
      author,
      img,
      plot,
    };

    dispatch(addBook(newBook));

    setTitle('');
    setAuthor('');
    setImg('');
    setPlot('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title
        <input type="text" name="title" value={title} onChange={handleChange} />
      </label>
      <label>
        Author
        <input type="text" name="author" value={author} onChange={handleChange} />
      </label>
      <label>
        Image
        <input type="url" name="img" value={img} onChange={handleChange} />
      </label>
      <label>
        Plot
        <input type="text" name="plot" value={plot} onChange={handleChange} />
      </label>

      <button type="submit">Add book</button>
    </form>
  );
};
