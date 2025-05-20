// import React, { useState } from 'react';
// import s from "UniversalComponents.module.css"
// import {SuperInput} from "./SuperInputText/SuperInput.tsx";
// export const UniversalComponents = () => {
//
//     const [stateForAllInputs, setValue] = useState<string>('')
//     const [error, setError] = useState<string>('')
//
//     const [stateForAllCheckboxes, setChecked] = useState<boolean>(false)
//
//     return (
//         <div>
//             <div className={s.inputs}>
//                 {/*совместим со старым кодом:*/}
//                 <div>
//                     <SuperInput
//                         value={stateForAllInputs}
//                         onChange={(e) => setValue(e.currentTarget.value)}
//                     />
//                 </div>
//                 {/*инпут с ошибкой:*/}
//                 <div>
//                     <SuperInput
//                         value={stateForAllInputs}
//                         onChangeText={setValue}
//                         error={error}
//                         onEnter={() => {
//                             setError(
//                                 stateForAllInputs.trim()
//                                     ? ''
//                                     : 'Error'
//                             )
//                             setValue('')
//                         }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };
