import { table } from 'console';
import { useEffect, useState } from 'react';
import data from '../../MovieData.json';
import { Movie } from '../types/movie';
import styles from './Movies.module.css';

function MovieList() {
  const [listOMovies, setListOMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setListOMovies(temp);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>

      <div className={styles.tablecontainer}>
        <table className={styles.mytable}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
              <th>Lent To</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {listOMovies
              .filter((m) => m.edited === 'Yes')
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((m) => (
                <tr className={styles.mytablerow} key={m.movieId}>
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                  <td>{m.category}</td>
                  <td>{m.edited ? 'Yes' : 'No'}</td>
                  <td>{m.lentTo}</td>
                  <td>{m.notes}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
