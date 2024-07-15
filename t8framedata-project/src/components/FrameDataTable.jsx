import React from "react";
import he from "he";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function FrameDataTable ( {characterFD} ) {

    const navigate = useNavigate();
    const [search,setSearch] = React.useState("");
    const [origFD,setorigFD] = React.useState(characterFD.slice(2))
    const [data,setData] = React.useState(characterFD.slice(2))

    // Table Render by Header and Body ################################################################################

    function renderTableHeader () {
        return(
            <tr>
                <th>Command</th>
                <th>Hit level</th>
                <th>Damage</th>
                <th>Start up frame</th>
                <th>Block frame</th>
                <th>Hit frame</th>
                <th className="hide-on-mobile">Counter hit frame</th>
                <th>Notes</th>
                {/* <th>Name</th> */}
            </tr>
        )
    }

    function renderTableData () {
        return (
            data.map((move, index) => {
                let blockFrameClass = 'safe';
                const blockFrameValue = move[4].trim(); // Remove any leading/trailing whitespace
                const numericValue = parseFloat(blockFrameValue);
    
                if (!isNaN(numericValue)) {
                    if (numericValue >= 1) {
                        blockFrameClass = 'plusoB'; // +1 or higher
                    } else if (numericValue <= -15) {
                        blockFrameClass = 'launch'; // -15 or worse
                    } else if (numericValue >= -15 && numericValue <= -10) {
                        blockFrameClass = 'punishable'; // between -10 and -15
                    }
                }

                return (
                    <tr key={index}>
                        {/* <td>{move[0] || ""}</td> */}
                        <td>
                            <div className="combined-cell">
                                <div className="name-row">{formatNames(move[10] || "")}</div>
                                <div className="input-row">{move[0] || ""}</div>
                            </div>
                        </td>
                        <td>{move[1] || ""}</td> {/* Hit Level */}
                        <td>{move[2] || ""}</td> {/* Damage */}
                        <td>{move[3] || ""}</td> {/* Start Up */}
                        <td className={blockFrameClass} >{move[4] || ""}</td> {/* Block Frame */}
                        <td>{move[5] || ""}</td> {/* Hit Frame */}
                        <td className="hide-on-mobile">{move[6] || ""}</td> {/* Counter Hit Frame */}
                        <td>{formatNotes(move[7]) || ""}</td>
                        {/* <td>{formatNames(move[10]) || ""}</td> */}
                    </tr>
                )
            })
        )
    }

    // Search Bar Functionality #########################################################################################

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    React.useEffect(() => {
        // console.log('reached Search effect');
        const filteredData = filterData(origFD, search);
        setData(filteredData);

        // console.log(`search: ${search}`);
        // console.log('data after search:');
        // console.log(filteredData);
    }, [search]);


    function filterData(origFD, search) {
        if (!search) return origFD;

        if (search.startsWith('+') || search.startsWith('-')) {
            // Extract the numeric value from the search input
            const valueToCompare = parseFloat(search);
    
            // Determine the comparison function based on '+' or '-'
            const comparator = search.startsWith('+') ?
                (actualValue, searchValue) => actualValue >= searchValue :
                (actualValue, searchValue) => actualValue <= searchValue;
    
            // Filter the original data based on numeric comparison
            return origFD.filter((move) => {
                const numericValue = parseFloat(move[4]);
                return comparator(numericValue, valueToCompare);
            });
        }

        if (search.toLowerCase().startsWith('i')) {
            return origFD.filter((move) =>
                move[3].toLowerCase().includes(search.toLowerCase())
            );
        }

        if (search.includes('+') || search.includes(',')) {
            return origFD.filter((move) => 
                move[0].toLowerCase() === search.toLowerCase() 
            );
        }
                
        return origFD.filter((move) =>
            formatInputs(move[0]).toLowerCase().includes(formatInputs(search).toLowerCase()) ||
            formatNames(move[10]).toLowerCase().includes(formatNames(search).toLowerCase())
        );
    }

    function formatNotes(notes) {
        if (!notes) return "";
        const lines = notes.split('*').filter(line => line.trim() !== '');
        return (
            <ul>
            {lines.map((line, index) => (
                <li key={index}>{line}</li>
            ))}
            </ul>
        );
    }

    function formatNames(name) {
        if (!name) return "";
        return he.decode(name);
    }

    function formatInputs(text) {
        if (typeof text !== 'string') {
            // Convert non-string values to empty string
            return "";
        }
        const regex = /[,+-]/g;
        return text.replace(regex, '');
    }

    return (
        <>
        <div className="table-arrow-container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5}}
                className="table-container"
                >
                    <div className="fd-search-container">
                        <label htmlFor="search" className="fd-table-search">
                                <input id="search" type="text" onChange={handleSearch} placeholder="Search" />
                        </label>
                    </div>
                    <div className="fd-table-wrapper">
                        <table className="fd-table">
                            <thead className="fd-table-header">
                                {/* <motion.div 
                                    className="fd-arrow-back" 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.5}}
                                    onClick={() => navigate('/')}
                                >
                                    <FontAwesomeIcon icon={faChevronLeft}  />
                                </motion.div> */}
                                {renderTableHeader()}
                            </thead>
                            <tbody className="fd-table-body">
                                {renderTableData()}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>  
        </>
    )

}

export default FrameDataTable