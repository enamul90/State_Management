import Counter from "../component/counterComponent/Counter.jsx";


const Home = () => {
    return (
        <div
            style={
            { textAlign: 'center',
                marginTop: '50px',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
            }
            }
        >
            <Counter />
        </div>
    );
};

export default Home;