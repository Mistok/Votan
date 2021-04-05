import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import SingleApartment from "./SingleApartmentComponent/singleApartment";

import "./ApartmentsTable.scss"
import "./../../../img/icon_options.png";


const ApartmentsTableContainer = (props) => {

    useEffect(()=>{
        console.log('useEffect in table run')
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
                return +a[field] > +b[field] ? 1 : -1;
            })
            setTableCopy(sortedTable)
        } else {
            const sortedTable = copyData.sort((a, b)=>{
                return +a[field] < +b[field] ? 1 : -1;
            })
            setTableCopy(sortedTable);
        }
        setSortDirection(!sortDirection);
        setIsSorted(true);
    }

    const sortByOwnerKey = (field) => {

        const  copyData = props.apartments.concat();
        const haveNoKey = [];
        const haveKey = [];
        copyData.map( apartment => {
            apartment[field] === null ?  haveNoKey.push(apartment) : haveKey.push(apartment)
        })
        if(sortDirection) {
            const newTable = [].concat(haveKey, haveNoKey);
            setTableCopy(newTable);
            setSortDirection(!sortDirection);
            setIsSorted(true);
        } else {
            const newTable = [].concat(haveNoKey, haveKey);
            setTableCopy(newTable);
            setSortDirection(!sortDirection);
            setIsSorted(true);
        }
    }
    const filterData = (e) => {
        let query = e.currentTarget.value
        if (e) {
            if(!query) {
                setIsSorted(false);
                return;
            }
            let newTable = table.filter( apartment => {
                if(apartment.apartmentName.toLowerCase().includes(query.toLowerCase()))
                    {return apartment}
            })
            setTableCopy(newTable);
            setIsSorted(true);
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