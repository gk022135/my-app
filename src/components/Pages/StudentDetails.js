import React, { useState } from "react";
import './studentDetails.css'

const StudentDetails = () => {
    const [studentDetails, setStudentDetails] = useState([]); // Initialize as an empty array
    const [loading, setLoading] = useState(false);
    const API_URL = process.env.REACT_APP_API_URL;

    const fetchStudentDetails = async (e) => {
        e.preventDefault();

        setLoading(true);
        const url = `${API_URL}gatepass`;
        const requestData = {
            email: localStorage.getItem("useremail"),
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log("Backend response:", result);

            // Extract and set logs
            if (result.success && result.logs) {
                setStudentDetails(result.logs); // Update state with logs array
            } else {
                console.error("Unexpected response format:", result);
            }
        } catch (error) {
            console.error("Error fetching student details:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="tablee">
                <button onClick={fetchStudentDetails} disabled={loading}>
                    {loading ? "Loading..." : "Show Details"}
                </button>

                {studentDetails.length > 0 ? (
                    <table border="1" style={{ marginTop: "20px", width: "100%", textAlign: "left" }}>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Created At</th>
                                <th>Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentDetails.map((log, index) => (
                                <tr key={index}>
                                    <td>{log.user}</td>
                                    <td>{new Date(log.createdAt).toLocaleString()}</td>
                                    <td>{log.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    !loading && <p>No logs found for this user.</p>
                )}
            </div>

        </div>
    );
};

export default StudentDetails;
