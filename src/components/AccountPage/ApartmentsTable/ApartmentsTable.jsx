import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import SingleApartment from "./SingleApartmentComponent/singleApartment";

import "./ApartmentsTable.scss"
import "./../../../img/icon_options.png";


const ApartmentsTableContainer = (props) => {

    useEffect(()=>{
        console.log('2st use effect in table')
        setTable(props.apartments)
    }, [props.apartments])
    const [table, setTable] = useState(props.apartments);
    const [sortDirection, setSortDirection] = useState(true);
    const [isSorted, setIsSorted] = useState(false)
    const [tableCopy, setTableCopy] = useState({...table})

    const sortData = (field) => {
        setTableCopy(props.apartments || [{
            "apartmentName": "відсутній",
            "id": "відсутній",
            "ownerKey": "відсутній",
            "square": "відсутній"
        }]);
        const  copyData = props.apartments.concat();
        if(sortDirection) {
            const sortedTable = copyData.sort((a, b)=>{
                return +a[field] > +b[field] ? 1 : -1
            })
            setTableCopy(sortedTable)
        } else {
            const sortedTable = copyData.sort((a, b)=>{
                return +a[field] < +b[field] ? 1 : -1;
            })
            setTableCopy(sortedTable)
        }

        debugger
        setSortDirection(!sortDirection);
        setIsSorted(true)

    }

    const sortByOwnerKey = (field) => {
        const  copyData = props.apartments.concat();
        const haveKeyTable = copyData.filter((a)=>{
            return a[field] !== null
        })
        const haveNoKeyTable = props.apartments.concat().filter((a)=>{
            return a[field] === null
        })
        console.log(`'''`)
        console.log(haveKeyTable)
        console.log(`'''`)
        console.log(haveNoKeyTable)
        console.log(`'''`)
        if(sortDirection) {
            const newTable = Object.assign( haveKeyTable, haveNoKeyTable)
            console.log(newTable)
            setTableCopy(newTable)
            setSortDirection(!sortDirection)
        } else {
            const newTable = Object.assign(  haveNoKeyTable, haveKeyTable)
            console.log(newTable)
            setTableCopy(newTable)
            setSortDirection(!sortDirection)

        }

    }
    const filterData = (e) => {
        console.log(table)
        let query = e.currentTarget.value
        if (e) {
            let newTable = table.filter( apartment => {
                // debugger
                if(apartment.apartmentName.toLowerCase().includes(query.toLowerCase()))
                    {
                        return apartment
                    }

            })
            console.log(newTable)
            setTableCopy(newTable)
        }
    }
    return (
        <>
            <table className="table apartments_table">
                <thead>
                <tr className="apartments_header">
                    <th className="text-left" onClick={()=>{sortData('name')}} scope="col">Назва</th>
                    <th onClick={()=>{sortData('square')}} scope="col">Площа, m<sup>2</sup></th>
                    <th onClick={()=>{sortByOwnerKey('ownerKey')}} scope="col">Ключ</th>
                    <th  scope="col">
                        <input onChange={(e)=>{filterData(e)}} type="text" placeholder="пошук" />
                    </th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {   isSorted
                    ? tableCopy.map(
                        apartment => (
                            <SingleApartment apatrment={apartment} sortData={sortData} key={apartment.id}/>
                        )
                    )
                    :  table.map(
                            apartment => (
                                <SingleApartment apatrment={apartment} sortData={sortData} key={apartment.id}/>
                            )
                        )

                }
                </tbody>
            </table>
        </>
    );
}
let mapStateToProps = (store) => {
    return {
        apartments: store.OSBBsCabinet.apartments
    }
};

export default connect(mapStateToProps, null)(ApartmentsTableContainer) ;