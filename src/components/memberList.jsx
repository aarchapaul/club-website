
export const MemberList = (props) => {
return (
	<div id="memberlist" className='text-center'>
        <div className="container">
            <div className='col-md-8 col-md-offset-2 section-title'>
                <h2>Member List</h2>
            </div>
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Sl. No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">House name</th>
                            <th scope="col">Place</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.data ? props.data.map((d, i) => (
                            <tr key={`${d.name}-${i}`}>
                                <td scope="row">{d.no}</td>
                                <td >{d.name}</td>
                                <td>{d.surname}</td>
                                <td>{d.place}</td>
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
