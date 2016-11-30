import React from 'react';
import MovieDialog from './MovieDialog';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const userArray = [
  {
    img: 'http://static-api.guidebox.com/111615/thumbnails_movies_medium/136325-1649814174-8589512435-396055780-medium-240x342-alt-.jpg',
    title: 'Colonia',
    overview: "A young woman (Emma Watson) infiltrates a torturous cult run by a Nazi in an attempt to rescue her boyfriend and overthrow a terrifying military regime. Inspired by shocking true events!",
    rating: "NR",
  },
  {
    img: "http://static-api.guidebox.com/111615/thumbnails_movies_medium/135388-2435160466-7220418323-4059842476-medium-240x342.jpg",
    title: 'Triple 9',
    overview: "When a crew of dirty cops is blackmailed by the Russian mob to execute a virtually impossible heist, they realize the only way to pull it off is to manufacture a 999, police code for \"officer down\". The chaos that ensues when a police officer is shot in the line of duty is just the diversion they'll need to do the job, but whether they have the will to kill one of their own is an entirely different matter. Their plan is turned upside down when the unsuspecting rookie they set up to die foils the attack, triggering a breakneck, action packed finale tangled with double-crosses, greed and revenge.",
    rating: "R",
  },
  {
    img: "http://static-api.guidebox.com/111615/thumbnails_movies_medium/135890-4305053689-7652936191-4603021820-medium-240x342.jpg",
    title: 'Midnight Special',
    overview: "A father (Michael Shannon) goes on the run to protect his young son, Alton (Jaeden Lieberher), and uncover the truth behind the boy's special powers. What starts as a race from religious extremists and local law enforcement quickly escalates to a nationwide manhunt involving the highest levels of the Federal Government. Ultimately his father risks everything to protect Alton and help fulfill a destiny that could change the world forever, in this genre–defying film as supernatural as it is intimately human.",
    rating: "PG-13",
  },
  {
    img: "http://static-api.guidebox.com/thumbnails_movies_medium/75064-6419312507-6938336328-3250074834-medium-240x342.jpg",
    title: 'Finding Nemo',
    overview: "A tale which follows the comedic and eventful journeys of two fish, the fretful Marlin and his young son Nemo, who are separated from each other in the Great Barrier Reef when Nemo is unexpectedly taken from his home and thrust into a fish tank in a dentist's office overlooking Sydney Harbor. Buoyed by the companionship of a friendly but forgetful fish named Dory, the overly cautious Marlin embarks on a dangerous trek and finds himself the unlikely hero of an epic journey to rescue his son.",
    rating: "G",
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies_medium/130768-3299135799-9610949344-3195947735-medium-240x342-alt-.jpg",
    title: 'Everest',
    overview: "Inspired by the incredible events surrounding an attempt to reach the summit of the world's highest mountain, Everest documents the awe-inspiring journey of two different expeditions challenged beyond their limits by one of the fiercest snowstorms ever encountered by mankind. Their mettle tested by the harshest elements found on the planet, the climbers will face nearly impossible obstacles as a lifelong obsession becomes a breathtaking struggle for survival. The epic adventure stars Jason Clarke, Josh Brolin, John Hawkes, Robin Wright, Michael Kelly, Sam Worthington, Keira Knightley, Emily Watson and Jake Gyllenhaal.",
    rating: "PG-13",
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies_medium/119434-6253606346-1172328783-2583201230-medium-240x342-alt-.jpg",
    title: 'Jurassic World',
    overview: "Steven Spielberg returns to executive produce the long-awaited next installment of his groundbreaking Jurassic Park series, Jurassic World. Colin Trevorrow directs the epic action-adventure based on characters created by Michael Crichton. The screenplay is by Rick Jaffa & Amanda Silver and Trevorrow & Derek Connolly, and the story is by Rick Jaffa & Amanda Silver. Frank Marshall and Patrick Crowley join the team as producers.",
     rating: "PG-13",
  },
  {
    img: "http://static-api.guidebox.com/120214/thumbnails_movies_medium/21488-4148427863-9878102662-3174143601-medium-240x342-alt-.jpg",
    title: 'The Dark Night',
    overview: "Visionary filmmaker Christopher Nolan's sequel to the highly successful \"Batman Begins,\" sees Batman (Christian Bale) as he raises the stakes in his war on crime. With the help of Lieutenant Jim Gordon (Gary Oldman) and District Attorney Harvey Dent (Aaron Eckhart), Batman sets out to dismantle the remaining criminal organizations that plague the city streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as 'The Joker'(Heath Ledger).",
    rating: "PG-13",
  },
  {
    img: "http://static-api.guidebox.com/111615/thumbnails_movies_medium/134422-151683060-177236004-8937469679-medium-240x342-alt-.jpg",
    title: 'Dirty Grandpa',
    overview: "Jason Kelly [Zac Efron] is one week away from marrying his boss's uber-controlling daughter, putting him on the fast track for a partnership at the law firm. However, when the straight-laced Jason is tricked into driving his foul-mouthed grandfather, Dick [Robert De Niro], to Daytona for spring break, his pending nuptials are suddenly in jeopardy. Between riotous frat parties, bar fights, and an epic night of karaoke, Dick is on a quest to live his life to the fullest and bring Jason along for the ride. Ultimately, on the wildest journey of their lives, \"dirty\" Grandpa and his uptight grandson discover they can learn from one another and form the bond they never had.",
    rating: "R",
  },
  {
    img: "http://static-api.guidebox.com/060515/thumbnails_movies_medium/117666-3727384186-3819910232-6671525240-medium-240x342-alt-.jpg",
    title: 'Spy',
    overview: "Susan Cooper (Melissa McCarthy) is an unassuming, deskbound CIA analyst, and the unsung hero behind the Agency's most dangerous missions. But when her partner (Jude Law) falls off the grid and another top agent (Jason Statham) is compromised, she volunteers to go deep undercover to infiltrate the world of a deadly arms dealer, and prevent a global disaster.",
    rating: "R",
  },
  {
    img: "http://static-api.guidebox.com/thumbnails_movies_medium/35899-1790661379-2837163895-8028762201-medium-240x342.jpg",
    title: 'Back to the Future',
    overview:  "From the Academy Award-winning filmmakers Steven Spielberg and Robert Zemeckis comes Back to the Future - the original, groundbreaking adventure that sparked one of the most successful trilogies ever! When teenager Marty McFly (Michael J. Fox) is blasted to 1955 in the DeLorean time machine created by the eccentric Doc Brown (Christopher Lloyd), he finds himself mixed up in a time-shattering chain reaction that could vaporize his future - and leave him trapped in the past. Powered by innovative special effects, unforgettable songs and non-stop action, Back to the Future is an unrivaled adventure that stands the test of time.",
    rating: "PG",
  },
];

const UserMovies = () => {
  return (
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2} cellHeight='342'>
          {userArray.map((tile) => (
            <GridTile
              key={tile.img}
              // title={tile.title}
              titleStyle={styles.titleStyle}
              titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            >
              <MovieDialog
                src={tile.img}
                title={tile.title}
                rating={tile.rating}
                overview={tile.overview}
              />
            </GridTile>
          ))}
        </GridList>
      </div>
)};

export default UserMovies;
