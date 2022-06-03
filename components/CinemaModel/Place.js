import classes from './Place.module.css'

function Place({seat, isFreePlace, handlePlaceClick}){

    if(isFreePlace===0){
        return(
            <span onClick={handlePlaceClick} className={classes.freePlace}>
                {seat}
            </span>
        )
    }else{
        return(
            <span className={classes.notFreePlace}>
                {seat}
            </span>
        )
    }
}

export default Place