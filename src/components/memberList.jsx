
export const MemberList = (props) => {
return (
	<div id="memberlist">
        <div className="container">
            <div >
                <h2>Member List</h2>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Phone No.</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.data ? props.data.map((d, i) => (
                            <tr key={`${d.name}-${i}`}>
                                <td scope="row">{d.name}</td>
                                <td>{d.age}</td>
                                <td>{d.phone}</td>
                            </tr>
                        ))
                        : 'loading'}
                    </tbody>  
                </table>
            </div>
        </div>
	</div>
);
}
