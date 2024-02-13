import { useRef } from "react";
import './PlaceModal.css';
import useOnClickOutside from "../../hooks/useOnClickOutside";

const PlaceModal = ({
    title,
    addr1,
    addr2,
    createdtime,
    modifiedtime,
    firstimage,
    firstimage2,
    setModalOpen,
}) => {

    const ref = useRef(null);
    //console.log(ref);

    useOnClickOutside(ref, ()=>{
        setModalOpen(false);
    });

  return (
    <div className="presentation" role="presentation">
        <div className="wrapper-modal">
            <div className="modal" ref={ref}>
                <span
                    onClick={()=>setModalOpen(false)}
                    className="modal-close"
                >
                    X
                </span>

                <img
                    className="modal__place-img"
                    src={firstimage ? firstimage : firstimage2}
                    alt="modal_place-img"
                />
                <div className="modal__content">
                    <h2 className="modal__title">
                        {title? title : "none"}
                    </h2>
                    <p className="modal__addr1">Address(주소): {addr1}{" "}</p>
                    <p className="modal__addr2">{addr2}</p>
                    <p className="modal__details">
                        <span>
                            Last modified date(수정일시) :
                        </span>{" "}
                        {modifiedtime ? modifiedtime : createdtime}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceModal
