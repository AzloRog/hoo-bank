import Navbar from './components/navbar/Navbar'
import Payment from "./components/payment/Payment"
import Business from "./components/business/Business"
import Billing from "./components/billing/Billing"
import CardDeal from "./components/card_deal/CardDeal"
import Comments from "./components/comments/Comments"

const App = () => {
    return (
        <>
            <Navbar />
            <Payment />
            <Business />
            <Billing />
            <CardDeal />
            <Comments />
        </>
    )
}
export default App