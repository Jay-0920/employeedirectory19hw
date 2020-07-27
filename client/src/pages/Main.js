import React, { useState, useEffect, Suspense } from "react";
import Form from "../components/Form.js";
import Table from "../components/Table.js";
import Axios from "axios";
const Wrapper = React.lazy(() => import("../components/Wrapper.js"));

function Main() {
    const [filter, setFilter] = useState("");
    const [sort, setSort] = useState();
    const [query, setQuery] = useState("/employees");
    const [category, setCategory] = useState("");
    const [employees, setEmployees] = useState([
        {
            id: 0,
            firstname: "TempFirstName",
            lastname: "TempLastName",
            department: "Temp Department",
            pay: 0,
        },
    ]);

    useEffect(() => {
        Axios({
            url: query,
            method: "GET",
        })
            .then((collections) => {
                setEmployees(collections.data);
            })
            .catch((error) => console.log(error));
    }, [query]);

    useEffect(() => {
        if (sort) {
            Axios({
                url: `${query}/sort/${sort}`,
                method: "GET",
            })
                .then((collections) => {
                    setEmployees(collections.data);
                })
                .catch((error) => console.log(error));
        }
    }, [sort]);

    const submitHandler = (event) => {
        if (filter && category) {
            setQuery(`/employees/${category}/${filter}`);
            return;
        }
        setQuery(`/employees`);
    };

    return (
        <Suspense fallback={<h2>Loading Employee Form and Table</h2>}>
            <Wrapper>
                <Form
                    filter={filter}
                    setFilter={(event) => setFilter(event.target.value)}
                    category={category}
                    setCategory={(event) => setCategory(event.target.value)}
                    submitHandler={submitHandler}
                />
                <Table
                    employees={employees}
                    setSort={(event) => setSort(event.target.name)}
                    className="row justify-content-center"
                />
            </Wrapper>
        </Suspense>
    );
}

export default Main;
