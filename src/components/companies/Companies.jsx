const Companies = () => {
    return (
        <section className="companies">
            <div className="container companies-container">
                {Companies.map(company => (
                    <div className="company">
                        <img src={company} alt="company name" />
                    </div>
                ))}
            </div>
        </section>
    )
}