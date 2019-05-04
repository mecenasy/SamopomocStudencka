import React, { FC } from 'react';

const StartPage: FC = () => (
   <div >
      <h1> Strona startowa portalu samopomocy studenckiej</h1>
      <p>Porta wymaga działania servera.</p>
      <p>Jeśli go jescze nie uruchomiłeś zrubto w nowej konsoli otwartej w folderze w którym znajduje się ten portal urzwając komendy "npm run start-server" a następmie odświerz portal</p>
      <br/>
      <p>Wybierz temat w menu. Następnie morzesz wyprać jedne z proponowanych tematów wraz z opisem oraz pobrać przykładowy plik</p>
      <p>Mozesz przeszukiwać baze po tematach serwer zruci wyniki które zawierają w temacie podaną frazę</p>
      <p>Możesz również dodać nowy temat do bazy wraz z załączonym plikiem</p>
   </div>
);

export default StartPage;
