
/**
 * Clase que representa un conjunto de números primos
 */
export class PrimeNumber implements Iterable<number> {
  private primenumber: number[] = [];
  private static PrimeNumberInstance: PrimeNumber ;

  /**
   * constructor de la clase
   * @param n número de primos que se quieren obtener
   */
  private constructor(n: number) {
    let contador = 0;
    let i = 2;
    while (contador < n) {
      if (this.isPrime(i)) {
        this.primenumber.push(i);
        contador++;
      }
      i++;
    }
  }

  /**
   * función que permite inicializar la clase
   * @param n número de primos con los que se quiere inicializar la clase
   * @returns devuelve la instancia de la clase
   */
  public static getInstance(n: number): PrimeNumber {
    if (!this.PrimeNumberInstance) {
      this.PrimeNumberInstance = new PrimeNumber(n);
    }
    return this.PrimeNumberInstance;
  }

  /**
   * función que permite obtener si un numero es primo o no
   * @param n número del que se quiere saber si es primo
   * @returns devuelve true si el número es primo y false si no lo es
   */
  public isPrime(n: number): boolean {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }

  /**
   * getter de la clase
   * @returns devuelve un array con los números primos
   */
  public getPrimeNumber(): number[] {
    return this.primenumber;
  }

  /**
   * función que permite obtener el largo del array de primos
   * @returns devuelve el largo del array de primos
   */
  public getPrimeNumberLength(): number {
    return this.primenumber.length;
  }

  /**
   * función que permite obtener un elemento del array de primos
   * @param n posición del array de primos que se quiere obtener
   * @returns devuelve el número primo que se encuentra en la posición n del array
   */
  public getPrimeNumberElement(n: number): number {
    return this.primenumber[n];
  }

  /**
   * función que permite modificar un elemento del array de primos
   * @param n posición del array de primos que se quiere modificar
   * @param value valor que se quiere asignar a la posición n del array
   * @returns devuelve true si se ha escrito el nuevo valor o false si no
   */
  public setPrimeNumberElement(n: number, value: number): boolean {
    if (this.isPrime(value)) {
      this.primenumber[n] = value;
      return true;
    }
    return false;
  }

  /**
   * función que permite establecer un nuevo array de primos
   * @param n número de primos que se va a establecer en la instancia de la clase
   */
  public setNewPrimeNumber(n: number): void {
    this.primenumber = [];
    let contador = 0;
    let i = 2;
    while (contador < n) {
      if (this.isPrime(i)) {
        this.primenumber.push(i);
        contador++;
      }
      i++;
    }
  }

  /**
   * función que permite obtener los n primeros números primos
   * @param n n número de primos que se quieren obtener
   * @returns devuelve un array con los n primeros números primos
   */
  public getFirstPrimeNumbers(n: number): number[] {
    let contador = 0;
    let i = 2;
    let primos: number[] = [];
    while (contador < n) {
      if (this.isPrime(i)) {
        primos.push(i);
        contador++;
      }
      i++;
    }
    return primos;
  }

  /**
   * función que permite obtener los números primos comprendidos entre a y b
   * @param a numero a partir del cual se quieren obtener los primos
   * @param b numero hasta el cual se quieren obtener los primos
   * @returns devuelve un array con los números primos comprendidos entre a y b
   */
  public getPrimeNumbersBetween(a: number, b: number): number[] {
    let primos: number[] = [];
    for (let i = a; i <= b; i++) {
      if (this.isPrime(i)) {
        primos.push(i);
      }
    }
    return primos;
  }

  /**
   * iterador de la clase
   * @returns devuelve un iterador de la clase
   */
  [Symbol.iterator](): Iterator<number> {
    return this.primenumber.values();
  }
}
