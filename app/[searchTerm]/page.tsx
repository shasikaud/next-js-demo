type Props = {
    params: {
        searchTerm: string
    }
}

// normal props without destructuring
// export default function page({ params }: Props) {
//     return (
//         <div> 
//         {`Search page with term ${params.searchTerm}`}
//         </div>
//     )
// }

// with props destructuring
export default function page({ params: { searchTerm} }: Props) {
    return (
        <div> 
        {`Search page with term ${searchTerm}`}
        </div>
    )
}
