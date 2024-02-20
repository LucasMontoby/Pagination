import {Routes, Route} from  "react-router-dom";

import Home from "./component/Home/Home";
import DetailCharacter from "./component/DetailCharacter/DatailCharacter";

export const AppRouter =  () => {

    return(
        <Routes>
            
            <Route path='/' element={<Home/>} />
            <Route path='/detailcharacter/:id' element={ <DetailCharacter/>}/>

        </Routes>

    )
}