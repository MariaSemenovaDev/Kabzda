// import React, {
//     ChangeEvent,
//     DetailedHTMLProps,
//     InputHTMLAttributes,
//     KeyboardEvent,
//     ReactNode,
// } from 'react'
// // тип пропсов обычного инпута
// type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
//     HTMLInputElement>
//
// // здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута, кроме type
// // (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
// type SuperInputTextPropsType = Omit<DefaultInputPropsType, 'type'> & {
//     // и + ещё пропсы которых нет в стандартном инпуте
//     onChangeText?: (value: string) => void
//     onEnter?: () => void
//     error?: ReactNode
//     spanClassName?: string
// }
//
// export const SuperInput: React.FC<SuperInputTextPropsType> = (
//     {
//         onChange,
//         onChangeText,
//         onKeyPress,
//         onEnter,
//         error,
//         className,
//         spanClassName,
//         id,
//
//         ...restProps // все остальные пропсы попадут в объект restProps
//     }) => {
//
//
//     return (
//         <div>
//
//         </div>
//     );
// };
