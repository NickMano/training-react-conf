import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './BadgeDetail.scss'

import Hero from "../../components/Hero/Hero";
import Badge from "../../components/Badge/Badge";
import fetchCharacter from "../../components/utils/fetchCharacter"
import DeleteBadgeModal from "../../components/Modal/DeleteBadgeModal";

const BadgeDetail = props => {
  const cssClassName = "BadgeDetail";

  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect( () => {
    setLoading(true);
    fetchCharacter(props.match.params.badgeId)
    .then( data => {
      setCharacter(data)
      setLoading(false)
    }
    )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Hero />
      <div className={`grid`}>
        <div className={`${cssClassName}__badge`}>
        {loading 
        ?
          <Badge loading/>
        :
          <Badge
            firstName={character.firstName || "Rick Sanchez"}
            jobTitle={character.jobTitle || "Viajero interdimensional"}
            twitter={character.twitter || "RickSanchez_C137_ok"}
            mail={character.mail || ""}
            imageUrl={character.avatarUrl}
          />
        }
          
        </div>
        <div className={`${cssClassName}__actions`}>
          <h2>Actions</h2>
          <Link className="btn btn--primary btn--full-width">Edit</Link>
          <button className="btn btn--full-width" onClick={() => setIsOpen(true)}>Delete</button>
          <DeleteBadgeModal isOpen={isOpen} onClose={() => setIsOpen(false)} history={props.history}/>
        </div>
      </div>
    </>
  );
};

export default BadgeDetail;
