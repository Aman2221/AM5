import React, { useState, useEffect, useCallback } from 'react'
import styles from '../../styles/Demo/demo.module.css'
import DemoCard from './DemoCard';
import Pivot from '../../pages/Pivot';
import { API } from "../../interfaces/data";

const Main = () => {

    const [value, setValue] = useState<string>("");
    const [view, setView] = useState<boolean>(false);
    const [data, setData] = useState<API[] | undefined>();

    useEffect(() => {
        const res = fetch(`https://us-central1-bossnet-dev.cloudfunctions.net/networkx-test/firesearch_test?query=${value}`)
        .then(res => res.json())
        .then((data) => setData(data))
        .catch(err => console.log(err))
    },[value]);
   
    const handleSort = (e : any) => {
        if(e.target.value == 'A-Z' && data){
            data.sort(function(a, b){
                let x = a.bussinessName.toLowerCase();
                let y = b.bussinessName.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
            });
            setData([...data])
        }
        else if(e.target.value == 'Z-A' && data){ 
            data.sort(function(a, b){
                let x = a.bussinessName.toLowerCase();
                let y = b.bussinessName.toLowerCase();
                if (x < y) {return 1;}
                if (x > y) {return -1;}
                return 0;
            });
            setData([...data]);
        }
    }

    return (
        <div>
            <div className={styles.nav}>
                <div className={styles.logo}>
                    <h2>Company search</h2>
                </div>
                <div className={styles.navOptions}>
                    <div className={styles.navOption} id="navOption1">                     
                        <button onClick={() => setView(false)}>Normal View</button>
                    </div>
                    <div className={styles.navOption} id="navOption2">
                        <button onClick={() => setView(true)}>Tabular View</button>
                    </div>
                </div>
            </div>
            <div className={styles.navSubmenu}>
                <div>
                    <h4>Results</h4>
                </div>
                <div className={styles.searchBox}>
                    <div>
                        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0057 8.76874H9.37336L9.14923 8.55696C9.93368 7.6628 10.4059 6.50196 10.4059 5.23915C10.4059 2.42333 8.07662 0.140869 5.20297 0.140869C2.32933 0.140869 0 2.42333 0 5.23915C0 8.05498 2.32933 10.3374 5.20297 10.3374C6.49171 10.3374 7.67639 9.87467 8.58891 9.10601L8.80503 9.32563V9.94526L12.8073 13.8592L14 12.6905L10.0057 8.76874V8.76874ZM5.20297 8.76874C3.20983 8.76874 1.60091 7.19219 1.60091 5.23915C1.60091 3.28612 3.20983 1.70957 5.20297 1.70957C7.19611 1.70957 8.80503 3.28612 8.80503 5.23915C8.80503 7.19219 7.19611 8.76874 5.20297 8.76874Z" fill="black"/>
                        </svg>
                        <input type="text" onChange={(e:any) =>setValue(e.target.value)} value={value} placeholder="Search" />
                        {
                            value.length > 0 &&
                            <svg onClick={() => setValue('')} className={styles.crossIcon} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.72601 3.22234L6.44836 0.5L7.22601 1.27766L4.50367 4L7.22601 6.72234L6.44836 7.5L3.72601 4.77766L1.00367 7.5L0.226013 6.72234L2.94836 4L0.226013 1.27766L1.00367 0.5L3.72601 3.22234Z" fill="#09121F"/>
                            </svg>
                        }
                    </div>
                </div>
                <div className={styles.filter}>
                    <select name="cars" id="cars" onChange={handleSort}>
                        <option value="ALL">All</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </div>
            </div>
            { 
                view ? (
                    <Pivot data={data}/>
                ) : 
                (   
                    <DemoCard data={data} value={value}/>
                )   
            }
        </div>
    )
}

export default Main