# Guion Practica 06-dsi

## Introduccion

***En esta practica se realizara 3 ejercicios de clases e interfaces en typescript.***


## Ejercicio 1 - StreamableCollection

### Introduccion

En este ejercicio se creara una clase abstracta generica StreamableCollection que implementara la interfaz Streamable. Posteriormente se crearan 3 clases que heredaran de StreamableCollection.

### Desarrollo

```typescript
export interface Streamable<T> {
  /**
   * funcion que devuelve un array de del tipo que contengan el año pasado por parametro
   * @param year año de la pelicula
   */
  getByYear(year: number): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan el titulo pasado por parametro
   * @param title titulo del tipo generico
   */
  getByTitle(title: string): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan el genero pasado por parametro
   * @param genre genero del tipo generico
   */
  getByGenre(genre: string): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan la duracion pasada por parametro
   * @param duration duracion del tipo generico
   */
  getByDuration(duration: number): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan la valoracion pasada por parametro
   * @param rating valoracion del tipo generico
   */
  getByRating(rating: number): T[];
  /**
   * funcion que devuelve los titulos de los elementos del tipo generico
   */
  getTitles(): string;
  /**
   * funcion que devuelve los años de los elementos del tipo generico
   */
  getYears(): string;
  /**
   * funcion que devuelve los generos de los elementos del tipo generico
   */
  getGenres(): string;
  /**
   * funcion que devuelve las duraciones de los elementos del tipo generico
   */
  getDurations(): string;
}
```

Esta es la interfaz Streamable que se implementara en la clase abstracta StreamableCollection. Esta interfaz contiene 9 funciones que devuelven un array de elementos del tipo generico, un string con los titulos, años, generos o duraciones de los elementos del tipo generico. Esta establecera la funciones que debera tener la clase abstracta StreamableCollection.

```typescript
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor(protected collection: T[]) {}

  /**
   * funcion que devuelve un array de del tipo que contengan el año pasado por parametro
   * @param year año de la pelicula
   */
  abstract getByYear(year: number): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan el titulo pasado por parametro
   * @param title titulo del tipo generico
   */
  abstract getByTitle(title: string): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan el genero pasado por parametro
   * @param genre genero del tipo generico
   */
  abstract getByGenre(genre: string): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan la duracion pasada por parametro
   * @param duration duracion del tipo generico
   */
  abstract getByDuration(duration: number): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan la valoracion pasada por parametro
   * @param rating valoracion del tipo generico
   */
  abstract getByRating(rating: number): T[];
  /**
   * funcion que devuelve un array de del tipo que contengan la valoracion pasada por parametro
   */
  abstract getTitles(): string;

  /**
   * funcion que devuelve los años de los elementos del tipo generico
   */
  abstract getYears(): string;
  /**
   * funcion que devuelve los generos de los elementos del tipo generico
   */
  abstract getGenres(): string;
  /**
   * funcion que devuelve las duraciones de los elementos del tipo generico
   */
  abstract getDurations(): string;

  /**
   * funcion que devuelve la coleccion de elementos del tipo generico
   * @returns devuelve la coleccion de elementos del tipo generico
   */
  public getCollection(): T[] {
    return this.collection;
  }

  /**
   * funcion que establece la coleccion de elementos del tipo generico
   * @param collection coleccion de elementos del tipo generico
   */
  public setCollection(collection: T[]): void {
    this.collection = collection;
  }

  /**
   * funcion que añade un elemento del tipo generico a la coleccion
   * @param Item elemento del tipo generico
   */
  public addItem(Item: T): void {
    this.collection.push(Item);
  }

  /**
   * funcion que elimina un elemento del tipo generico de la coleccion
   * @returns devuelve el numero de elementos del tipo generico que hay en la coleccion
   */
  public getNumberOfItems(): number {
    return this.collection.length;
  }
}
```

Esta es la clase abstracta StreamableCollection que implementa la interfaz Streamable. Esta clase contiene 9 funciones abstractas que devuelven un array de elementos del tipo generico, un string con los titulos, años, generos o duraciones de los elementos del tipo generico. Esta clase tambien contiene 4 funciones que devuelven la coleccion de elementos del tipo generico, establecen la coleccion de elementos del tipo generico, añaden un elemento del tipo generico a la coleccion y devuelven el numero de elementos del tipo generico que hay en la coleccion.

```typescript
export class DocumentaryCollection extends BasicStreamableCollection<Documentary> {
  /**
   * constructor de la clase
   * @param collection coleccion de documentales
   */
  constructor(collection: Documentary[]) {
    super(collection);
  }

  /**
   * funcion que devuelve un array de documentales que contengan el year pasado por parametro
   * @param year año de estreno
   * @returns devuelve un array de documentales que contengan el year pasado por parametro
   */
  public getByYear(year: number): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getYear() === year
    );
  }

  /**
   * funcion que devuelve un array de documentales que contengan el titulo pasado por parametro
   * @param title titulo del documental
   * @returns devuelve un array de documentales que contengan el titulo pasado por parametro
   */
  public getByTitle(title: string): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getTitle() === title
    );
  }

  /**
   * funcion que devuelve un array de documentales que contengan el genero pasado por parametro
   * @param genre genero del documental
   * @returns devuelve un array de documentales que contengan el genero pasado por parametro
   */
  public getByGenre(genre: string): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getGenre() === genre
    );
  }

  /**
   * funcion que devuelve un array de documentales que contengan la duracion pasada por parametro
   * @param duration duracion del documental
   * @returns devuelve un array de documentales que contengan la duracion pasada por parametro
   */
  public getByDuration(duration: number): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getDuration() === duration
    );
  }

  /**
   * funcion que devuelve un array de documentales que contengan el rating pasado por parametro
   * @param rating rating del documental
   * @returns devuelve un array de documentales que contengan el rating pasado por parametro
   */
  public getByRating(rating: number): Documentary[] {
    return this.collection.filter(
      (documentary) => documentary.getRating() === rating
    );
  }

  /**
   * funcion que devuelve la duracion total de todos los documentales
   * @returns devuelve la duracion total de todos los documentales
   */
  public getDurations(): string {
    let duration = "";
    this.collection.forEach((documentary) => {
      duration += documentary.getDuration() + " ";
    });
    duration = duration.substring(0, duration.length - 1);
    return duration;
  }

  /**
   * funcion que devuelve el rating total de todos los documentales
   * @returns devuelve el rating total de todos los documentales
   */
  public getGenres(): string {
    let genre = "";
    this.collection.forEach((documentary) => {
      if (genre.search(documentary.getGenre()) == -1)
        genre += documentary.getGenre() + " ";
    });
    genre = genre.substring(0, genre.length - 1);
    return genre;
  }

  /**
   * funcion que devuelve el titulo de todos los documentales
   * @returns devuelve el titulo de todos los documentales
   */
  public getTitles(): string {
    let title = "";
    this.collection.forEach((documentary) => {
      title += documentary.getTitle() + " ";
    });
    title = title.substring(0, title.length - 1);
    return title;
  }

  /**
   * funcion que devuelve el year de estreno de todos los documentales
   * @returns devuelve el year de estreno de todos los documentales
   */
  public getYears(): string {
    let year = "";
    this.collection.forEach((documentary) => {
      year += documentary.getYear() + " ";
    });
    year = year.substring(0, year.length - 1);
    return year;
  }
}
```

Esta es la clase DocumentaryCollection que extiende de BasicStreamableCollection y que implementa la interfaz Streamable. Esta clase contiene 6 funciones que devuelven un array de documentales que contengan el year, titulo, genero, duracion o rating pasado por parametro. Esta clase tambien contiene 4 funciones que devuelven el titulo, year duracion o genero de todos los documentales. 

```typescript
export class Documentary {
  /**
   * constructor de la clase
   * @param title titulo del documental
   * @param year year de estreno
   * @param genre genero
   * @param duration duracion en minutos
   * @param rating rating
   */
  constructor(
    private title: string,
    private year: number,
    private genre: string,
    private duration: number,
    private rating: number
  ) {}

  /**
   * funcion que devuelve el titulo del documental
   * @returns titulo del documental
   */
  public getTitle(): string {
    return this.title;
  }

  /**
   * funcion que devuelve el year de estreno
   * @returns year de estreno
   */
  public getYear(): number {
    return this.year;
  }

  /**
   * funcion que devuelve el genero
   * @returns genero
   */
  public getGenre(): string {
    return this.genre;
  }

  /**
   * funcion que devuelve la duracion en minutos
   * @returns duracion en minutos
   */
  public getDuration(): number {
    return this.duration;
  }

  /**
   * funcion que devuelve el rating
   * @returns rating
   */
  public getRating(): number {
    return this.rating;
  }
}
```

Esta es la clase Documentary que contiene 5 atributos privados que son el titulo, year, genero, duracion y rating. Esta clase tambien contiene 5 funciones que devuelven el titulo, year, genero, duracion o rating del documental.

```typescript
export class MovieCollection extends BasicStreamableCollection<Movie> {
  /**
   * constructor de la clase
   * @param collection coleccion de peliculas
   */
  constructor(collection: Movie[]) {
    super(collection);
  }

  /**
   * funcion que devuelve un array de peliculas que contengan el year pasado por parametro
   * @param year año de estreno
   * @returns devuelve un array de peliculas que contengan el year pasado por parametro
   */
  public getByYear(year: number): Movie[] {
    return this.collection.filter((movie) => movie.getYear() === year);
  }

  /**
   * funcion que devuelve un array de peliculas que contengan el titulo pasado por parametro
   * @param title titulo de la pelicula
   * @returns devuelve un array de peliculas que contengan el titulo pasado por parametro
   */
  public getByTitle(title: string): Movie[] {
    return this.collection.filter((movie) => movie.getTitle() === title);
  }

  /**
   * funcion que devuelve un array de peliculas que contengan el genero pasado por parametro
   * @param genre genero de la pelicula
   * @returns devuelve un array de peliculas que contengan el genero pasado por parametro
   */
  public getByGenre(genre: string): Movie[] {
    return this.collection.filter((movie) => movie.getGenre() === genre);
  }

  /**
   * funcion que devuelve un array de peliculas que contengan la duracion pasada por parametro
   * @param duration duracion de la pelicula
   * @returns devuelve un array de peliculas que contengan la duracion pasada por parametro
   */
  public getByDuration(duration: number): Movie[] {
    return this.collection.filter((movie) => movie.getDuration() === duration);
  }

  /**
   * funcion que devuelve un array de peliculas que contengan el rating pasado por parametro
   * @param rating rating de la pelicula
   * @returns devuelve un array de peliculas que contengan el rating pasado por parametro
   */
  public getByRating(rating: number): Movie[] {
    return this.collection.filter((movie) => movie.getRating() === rating);
  }

  /**
   * funcion que devuelve la duracion total de la coleccion de peliculas
   * @returns devuelve la duracion total de la coleccion de peliculas
   */
  public getDurations(): string {
    let duration = "";
    this.collection.forEach((movie) => {
      duration += movie.getDuration() + " ";
    });
    duration = duration.substring(0, duration.length - 1);
    return duration;
  }

  /**
   * funcion que devuelve el rating total de la coleccion de peliculas
   * @returns devuelve el rating total de la coleccion de peliculas
   */
  public getGenres(): string {
    let genre = "";
    this.collection.forEach((movie) => {
      if (genre.search(movie.getGenre()) == -1) genre += movie.getGenre() + " ";
    });
    genre = genre.substring(0, genre.length - 1);
    return genre;
  }

  /**
   * funcion que devuelve el rating total de la coleccion de peliculas
   * @returns devuelve el rating total de la coleccion de peliculas
   */
  public getTitles(): string {
    let title = "";
    this.collection.forEach((movie) => {
      title += movie.getTitle() + " ";
    });
    title = title.substring(0, title.length - 1);
    return title;
  }

  /**
   * funcion que devuelve el rating total de la coleccion de peliculas
   * @returns devuelve el rating total de la coleccion de peliculas
   */
  public getYears(): string {
    let year = "";
    this.collection.forEach((movie) => {
      year += movie.getYear() + " ";
    });
    year = year.substring(0, year.length - 1);
    return year;
  }
}
```

Esta es la clase MovieCollection que extiende de BasicStreamableCollection y que implementa la interfaz Streamable. Esta clase contiene 6 funciones que devuelven un array de peliculas que contengan el year, titulo, genero, duracion o rating pasado por parametro. Esta clase tambien contiene 4 funciones que devuelven el titulo, year duracion o genero de todas las peliculas.

```typescript
export class Movie {
  /**
   * constructor de la clase
   * @param title titulo de la pelicula
   * @param year year de estreno
   * @param genre genero de la pelicula
   * @param duration duracion en minutos
   * @param rating rating de la pelicula
   */
  constructor(
    private title: string,
    private year: number,
    private genre: string,
    private duration: number,
    private rating: number
  ) {}

  /**
   * funcion que devuelve el titulo de la pelicula
   * @returns titulo de la pelicula
   */
  public getTitle(): string {
    return this.title;
  }

  /**
   * funcion que devuelve el year de estreno
   * @returns year de estreno
   */
  public getYear(): number {
    return this.year;
  }

  /**
   * funcion que devuelve el genero de la pelicula
   * @returns genero de la pelicula
   */
  public getGenre(): string {
    return this.genre;
  }

  /**
   * funcion que devuelve la duracion en minutos
   * @returns duracion en minutos
   */
  public getDuration(): number {
    return this.duration;
  }

  /**
   * funcion que devuelve el rating de la pelicula
   * @returns rating de la pelicula
   */
  public getRating(): number {
    return this.rating;
  }
}
```

Esta es la clase Movie que contiene 5 atributos privados que son el titulo, year, genero, duracion y rating. Esta clase tambien contiene 5 funciones que devuelven el titulo, year, genero, duracion o rating de la pelicula.

```typescript
export class SerieCollection extends BasicStreamableCollection<Serie> {
  /**
   * constructor de la clase
   * @param collection coleccion de series
   */
  constructor(collection: Serie[]) {
    super(collection);
  }

  /**
   * funcion que devuelve un array de series que contengan el year pasado por parametro
   * @param year año de estreno
   * @returns devuelve un array de series que contengan el year pasado por parametro
   */
  public getByYear(year: number): Serie[] {
    return this.collection.filter((serie) => serie.getYear() === year);
  }

  /**
   * funcion que devuelve un array de series que contengan el titulo pasado por parametro
   * @param title titulo de la serie
   * @returns devuelve un array de series que contengan el titulo pasado por parametro
   */
  public getByTitle(title: string): Serie[] {
    return this.collection.filter((serie) => serie.getTitle() === title);
  }

  /**
   * funcion que devuelve un array de series que contengan el genero pasado por parametro
   * @param genre genero de la serie
   * @returns devuelve un array de series que contengan el genero pasado por parametro
   */
  public getByGenre(genre: string): Serie[] {
    return this.collection.filter((serie) => serie.getGenre() === genre);
  }

  /**
   * funcion que devuelve un array de series que contengan la duracion pasada por parametro
   * @param duration duracion de la serie
   * @returns devuelve un array de series que contengan la duracion pasada por parametro
   */
  public getByDuration(duration: number): Serie[] {
    return this.collection.filter((serie) => serie.getDuration() === duration);
  }

  /**
   * funcion que devuelve un array de series que contengan el rating pasado por parametro
   * @param rating rating de la serie
   * @returns devuelve un array de series que contengan el rating pasado por parametro
   */
  public getByRating(rating: number): Serie[] {
    return this.collection.filter((serie) => serie.getRating() === rating);
  }

  /**
   * funcion que devuelve un string con todos las duraciones de las series
   * @returns devuelve un string con todos las duraciones de las series
   */
  public getDurations(): string {
    let duration = "";
    this.collection.forEach((serie) => {
      duration += serie.getDuration() + " ";
    });
    duration = duration.substring(0, duration.length - 1);
    return duration;
  }

  /**
   * funcion que devuelve un string con todos los generos de las series
   * @returns devuelve un string con todos los generos de las series
   */
  public getGenres(): string {
    let genre = "";
    this.collection.forEach((serie) => {
      if (genre.search(serie.getGenre()) == -1) genre += serie.getGenre() + " ";
    });
    genre = genre.substring(0, genre.length - 1);
    return genre;
  }

  /**
   * funcion que devuelve un string con todos los titulos de las series
   * @returns devuelve un string con todos los titulos de las series
   */
  public getTitles(): string {
    let title = "";
    this.collection.forEach((serie) => {
      title += serie.getTitle() + " ";
    });
    title = title.substring(0, title.length - 1);
    return title;
  }

  /**
   * funcion que devuelve un string con todos los años de las series
   * @returns devuelve un string con todos los años de las series
   */
  public getYears(): string {
    let year = "";
    this.collection.forEach((serie) => {
      year += serie.getYear() + " ";
    });
    year = year.substring(0, year.length - 1);
    return year;
  }
}
```

Esta es la clase SerieCollection que extiende de BasicStreamableCollection y que implementa la interfaz Streamable. Esta clase contiene 6 funciones que devuelven un array de series que contengan el year, titulo, genero, duracion o rating pasado por parametro. Esta clase tambien contiene 4 funciones que devuelven el titulo, year duracion o genero de todas las series.

```typescript
export class Serie {
  /**
   * constructor de la clase
   * @param title titulo de la serie
   * @param year año de estreno
   * @param genre genero de la serie
   * @param duration duracion en minutos
   * @param rating rating de la serie
   */
  constructor(
    private title: string,
    private year: number,
    private genre: string,
    private duration: number,
    private rating: number
  ) {}

  /**
   * funcion que devuelve el titulo de la serie
   * @returns titulo de la serie
   */
  public getTitle(): string {
    return this.title;
  }

  /**
   * funcion que devuelve el año de estreno
   * @returns devuelve el año de estreno
   */
  public getYear(): number {
    return this.year;
  }

  /**
   * funcion que devuelve el genero de la serie
   * @returns devuelve el genero de la serie
   */
  public getGenre(): string {
    return this.genre;
  }

  /**
   * funcion que devuelve la duracion en minutos
   * @returns devuelve la duracion en minutos
   */
  public getDuration(): number {
    return this.duration;
  }

  /**
   * funcion que devuelve el rating de la serie
   * @returns devuelve el rating de la serie
   */
  public getRating(): number {
    return this.rating;
  }
}
```

Esta es la clase Serie que contiene 5 atributos privados que son el titulo, year, genero, duracion y rating. Esta clase tambien contiene 5 funciones que devuelven el titulo, year, genero, duracion o rating de la serie.

### Conclusiones

El fin de esta practica ha sido el de aprender a utilizar las interfaces y las clases abstractas. Para ello hemos creado una interfaz Streamable, una clase abstracta generica BasicStreamableCollection y tres clases que implementan la interfaz Streamable.

## Ejercicio 2 - Generic Array

### Introducción

En este ejercicio vamos a crear una clase generica que nos permita crear un array de cualquier tipo de dato.

### Desarrollo

```typescript
export class Lista<T> {
  private elementos: T[];

  /**
   * constructor de la clase Lista
   * @param elementos Elementos de la lista
   */
  constructor(...elementos: T[]) {
    this.elementos = [];
    this.concatenate(...elementos);
  }
}
```

Esta es la clase Lista que contiene un atributo privado elementos que es un array de cualquier tipo de dato. Esta clase tambien contiene un constructor que recibe un array de cualquier tipo de dato y lo guarda en el atributo elementos.

```typescript
/**
   * funcion que concatena los elementos pasados como argumento
   * @param elementos Elementos a concatenar
   */
  concatenate(...elementos: T[]): void {
    let indice = this.elementos.length;
    for (let i = 0; i < elementos.length; i++) {
      this.elementos[indice] = elementos[i];
      indice++;
    }
  }
```

Esta es la funcion concatenate que recibe un array de cualquier tipo de dato y lo concatena al array elementos.

```typescript
/**
   * funcion que concatena las listas pasadas como argumento
   * @param listas Lista de listas a concatenar
   */
  concatenarListas(...listas: Lista<T>[]): void {
    for (let i = 0; i < listas.length; i++) {
      let elementos = listas[i].toArray();
      this.concatenate(...elementos);
    }
  }
```

Esta es la funcion concatenarListas que recibe un array de listas de cualquier tipo de dato y concatena todos los elementos de las listas al array elementos.

```typescript
/**
   * funcion que filtra los elementos de la lista
   * @param predicado predicado que se aplica a cada elemento de la lista
   * @returns devuelve una lista con los elementos que cumplen el predicado
   */
  filter(predicado: (elemento: T) => boolean): Lista<T> {
    let elementosFiltrados = new Lista<T>();
    for (let i = 0; i < this.elementos.length; i++) {
      if (predicado(this.elementos[i])) {
        elementosFiltrados.concatenate(this.elementos[i]);
      }
    }
    return elementosFiltrados;
  }
```

Esta es la funcion filter que recibe un predicado que se aplica a cada elemento de la lista y devuelve una lista con los elementos que cumplen el predicado.

```typescript
/**
   * funcion que devuelve la longitud de la lista
   * @returns devuelve la longitud de la lista
   */
  length(): number {
    let longitud = 0;
    for (let i = 0; i < this.elementos.length; i++) {
      longitud++;
    }
    return longitud;
  }
```

Esta es la funcion length que devuelve la longitud de la lista.

```typescript
/**
   * funcion que mappea los elementos de la lista dada una funcion
   * @param funcion funcion que se aplica a cada elemento de la lista
   * @returns devuelve una lista con los elementos transformados
   */
  map<U>(funcion: (elemento: T) => U): Lista<U> {
    let nuevosElementos = new Lista<U>();
    for (let i = 0; i < this.elementos.length; i++) {
      let resultado = funcion(this.elementos[i]);
      nuevosElementos.concatenate(resultado);
    }
    return nuevosElementos;
  }
```

Esta es la funcion map que recibe una funcion que se aplica a cada elemento de la lista y devuelve una lista con los elementos transformados.

```typescript
/**
   * funcion que reduce los elementos de la lista dada una funcion y un acumulador
   * @param funcion funcion que se aplica a cada elemento de la lista
   * @param acumulador acumulador que se va actualizando
   * @returns devuelve el acumulador
   */
  reduce<U>(funcion: (acumulador: U, elemento: T) => U, acumulador: U): U {
    let nuevoAcumulador = acumulador;
    for (let i = 0; i < this.elementos.length; i++) {
      nuevoAcumulador = funcion(nuevoAcumulador, this.elementos[i]);
    }
    return nuevoAcumulador;
  }
```

Esta es la funcion reduce que recibe una funcion que se aplica a cada elemento de la lista y un acumulador que se va actualizando y devuelve el acumulador.

```typescript
/**
   * funcion que devuelve la lista original en orden inverso
   * @returns devuelve una lista con los elementos de la lista original en orden inverso
   */
  reverse(): Lista<T> {
    let invertida = new Lista<T>();
    for (let i = this.length() - 1; i >= 0; i--) {
      invertida.concatenate(this.elementos[i]);
    }
    return invertida;
  }
```

Esta es la funcion reverse que devuelve una lista con los elementos de la lista original en orden inverso.

```typescript
/**
   * funcion que devuelve la lista original en un array
   * @returns devuelve un array con los elementos de la lista
   */
  toArray(): T[] {
    let resultado = new Array<T>();
    for (let i = 0; i < this.elementos.length; i++) {
      resultado.push(this.elementos[i]);
    }
    return resultado;
  }
```

Esta es la funcion toArray que devuelve un array con los elementos de la lista.

```typescript
/**
   * funcion que aplica una funcion a cada elemento de la lista
   * @param funcion funcion que se aplica a cada elemento de la lista
   */
  forEach(funcion: (elemento: T) => void): void {
    for (let i = 0; i < this.elementos.length; i++) {
      funcion(this.elementos[i]);
    }
  }
```

Esta es la funcion forEach que recibe una funcion que se aplica a cada elemento de la lista.

### Conclusiones

En este ejercicio hemos creado una clase generica que nos permite crear un array de cualquier tipo de dato. Esta clase contiene funciones que nos permiten trabajar con el array de cualquier tipo de dato. Sin usar las funciones de la clase array.

## Ejercicio 3 - Modificacion ejercicio 1 practica 5 - Clase Discografia

### Descripcion

En este ejercicio vamos a modificar la clase Discografia del ejercicio 1 de la practica 5. En este ejercicio vamos a modificar la clase Discografia para que pueda ser de discos singles o discos y singles. Para ello tambien crearemos la nueva clase Single.

### Desarrollo

```typescript
export class Single {
  private nombre: string;
  private fecha_publicacion: string;
  private canciones: string[];

  /**
   * constructor de la clase Single
   * @param nombre nombre del single
   * @param fecha_publicacion fecha de publicación del single
   * @param canciones canciones del single
   */
  constructor(nombre: string, fecha_publicacion: string, canciones: string[]) {
    this.nombre = nombre;
    this.fecha_publicacion = fecha_publicacion;
    this.canciones = canciones;
  }

  /**
   * función que devuelve el nombre del single
   * @returns devuelve el nombre del single
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * función que devuelve la fecha de publicación del single
   * @returns devuelve la fecha de publicación del single
   */
  public getFechaPublicacion(): string {
    return this.fecha_publicacion;
  }

  /**
   * función que devuelve las canciones del single
   * @returns devuelve las canciones del single
   */
  public getCanciones(): string[] {
    return this.canciones;
  }

  /**
   * función que asigna un nombre al single
   * @param nombre nombre del single a asignar
   */
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  /**
   * función que asigna una fecha de publicación al single
   * @param fecha_publicacion fecha de publicación del single a asignar
   */
  public setFechaPublicacion(fecha_publicacion: string): void {
    this.fecha_publicacion = fecha_publicacion;
  }

  /**
   * función que asigna canciones al single
   * @param canciones canciones del single a asignar
   */
  public setCanciones(canciones: string[]): void {
    this.canciones = canciones;
  }
}
```

Esta es la clase Single que contiene el nombre, la fecha de publicación y las canciones del single. Tambien contiene los getters y setters de cada atributo.

```typescript
export class Discografica<T extends Disco | Single> {
  private nombre: string;
  private discos: Disco[];
  private singles: Single[];

  /**
   * constructor de la clase Discografica
   * @param nombre nombre de la discografica
   * @param discos discos de la discografica
   */
  constructor(nombre: string, discos?: Disco[], singles?: Single[]) {
    this.nombre = nombre;

    if (discos) {
      this.discos = discos;
    } else {
      this.discos = [];
    }

    if (singles) {
      this.singles = singles;
    } else {
      this.singles = [];
    }
  }

  /**
   * función que devuelve el nombre de la discografica
   * @returns devuelve el nombre de la discografica
   */
  public getNombre(): string {
    return this.nombre;
  }

  /**
   * función que asigna un nombre a la discografica
   * @param nombre nombre de la discografica a asignar
   */
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  /**
   * función que devuelve los discos de la discografica
   * @returns devuelve los discos de la discografica
   */
  public getDiscos(): Disco[] {
    return this.discos;
  }

  /**
   * función que asigna discos a la discografica
   * @param discos discos de la discografica a asignar
   */
  public setDiscos(discos: Disco[]): void {
    this.discos = discos;
  }

  /**
   * función que devuelve los singles de la discografica
   * @returns devuelve los singles de la discografica
   */
  public getSingles(): Single[] {
    return this.singles;
  }

  /**
   * función que asigna singles a la discografica
   * @param singles singles de la discografica a asignar
   */
  public setSingles(singles: Single[]): void {
    this.singles = singles;
  }
}
```

Esta es la clase Discografica que contiene el nombre, los discos y los singles de la discografica. Tambien contiene los getters y setters de cada atributo.

### Conclusiones

En este ejercicio hemos modificado la clase Discografia del ejercicio 1 de la practica 5. En este ejercicio hemos modificado la clase Discografia para que pueda ser de discos singles o discos y singles. Para ello tambien hemos creado la nueva clase Single.

## Ejercicio 4 - Modificacion de clase

### Descripcion

En este ejercicio vamos a crear una interfaz generica llamada printable que contiene una funcion llamada print. Esta funcion devuelve el contenido de la instancia de la clase que implemente la interfaz como string. Tambien vamos a crear una interfaz generica llamada Collectable que permita añadir, obtener, quitar y obtener el numero total de items. Y finalmente crearemos dos clases que implementen la clase abstracta PrintableCollection que implementa las dos interfaces anteriores.

### Desarrollo

```typescript
export interface Printable<T> {
  /**
   * funcion print de la interfaz printable
   */
  print(): string;
}
```

Esta es la interfaz Printable que contiene la funcion print que devuelve el contenido de la instancia de la clase que implemente la interfaz como string.

```typescript
export interface Collectable<T> {
  /**
   * funcion añadir item a la coleccion
   * @param item item a añadir a la coleccion
   */
  addItem(item: T): void;

  /**
   * funcion para obtener el item en el indice indicado
   * @param index indice del item a obtener de la coleccion
   */
  getItem(index: number): T | undefined;

  /**
   * funcion que borra el item en el indice indicacado
   * @param index indice del item a borrar de la coleccion
   */
  removeItem(index: number): T | undefined;

  /**
   * funcion que devuelve el numero de items que existen en la coleccion
   */
  getNumberOfItems(): number;
}
```

Esta es la interfaz Collectable que contiene las funciones addItem, getItem, removeItem y getNumberOfItems. Estas funciones permiten añadir, obtener, quitar y obtener el numero total de items de la coleccion.

```typescript
export abstract class PrintableCollection<T>
  implements Collectable<T>, Printable<T>
{
  /**
   * items de la clase
   */
  protected items: T[] = [];

  /**
   * funcion para añadir items a la coleccion
   * @param item item a añadir a la coleccion
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * funcion que devuelve el item en el indice que se ha indicado
   * @param index indice del item que se quiere obtener
   * @returns devuelve el item en el indice que se ha indicado
   */
  getItem(index: number): T | undefined {
    if (index < 0 || index > this.items.length) {
      return undefined;
    }
    return this.items[index];
  }

  /**
   * funcion que devuelve el item que se quiere borarr dado un indice
   * @param index indice del item que se quiere borrar
   * @returns devuelve el item que se ha borrado o undefined
   */
  removeItem(index: number): T | undefined {
    if (index < 0 || index > this.items.length) {
      return undefined;
    }
    return this.items.splice(index, 1)[0];
  }
  
  /**
   * funcion para obtener el numero de items que tiene la coleccion
   * @returns devuelve el numero de items que tiene la coleccion
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  abstract print(): string;
}
```

Esta es la clase abstracta PrintableCollection que implementa las dos interfaces anteriores. Esta clase contiene los atributos y metodos de las dos interfaces. Tambien contiene un atributo items que es un array de tipo T. Este atributo es protected para que solo las clases que hereden de esta puedan acceder a el. Tambien contiene un metodo abstracto print que devuelve el contenido de la instancia de la clase que implemente la interfaz como string.

```typescript
export class NumericPrintableCollection extends PrintableCollection<number> {
  /**
   * constructor de la clase
   * @param items items de la clase
   */
  constructor(items: number[]) {
    super();
    this.items = items;
  }

  /**
   * funcion que devuelve los items de la clase como una string
   * @returns devuelve los items de la coleccion como una string
   */
  print(): string {
    let print = "";

    for (let i = 0; i < this.items.length; i++) {
      print += this.items[i] + " ";
    }

    print = print.substring(0, print.length - 1);
    return print;
  }
}
```

Esta es la clase NumericPrintableCollection que hereda de la clase PrintableCollection. Esta clase contiene un atributo items que es un array de numeros. Tambien contiene un constructor que recibe un array de numeros y lo asigna al atributo items. Y finalmente contiene un metodo print que devuelve los items de la clase como una string.

```typescript
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * constructor de la clase
   * @param items items de la clase
   */
  constructor(items: string[]) {
    super();
    this.items = items;
  }
  /**
   * funcion print que devuelve todos los items como una string con comas entre cada item
   * @returns retorna todos los items como una cadena con comas entre medio
   */
  print(): string {
    let print = "";

    for (let i = 0; i < this.items.length; i++) {
      print += this.items[i] + ", ";
    }

    print = print.substring(0, print.length - 2);

    return print;
  }
}
```

Esta es la clase StringPrintableCollection que hereda de la clase PrintableCollection. Esta clase contiene un atributo items que es un array de strings. Tambien contiene un constructor que recibe un array de strings y lo asigna al atributo items. Y finalmente contiene un metodo print que devuelve los items de la clase como una string con comas entre cada item.

### Conclusiones de la practica

En esta practica hemos visto como crear interfaces, clases, clases abstractas y clases genericas. A traves de hacer interfaces y clases genericas como StreamableCollection o ArrayGenerico. A su vez hemos visto como crear una clase generica que puede contener dos diferentes tipos de datos.
