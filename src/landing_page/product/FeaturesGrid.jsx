import FeatureCard from "./FeatureCard";

function FeaturesGrid() {
    const features = [
        {
            image: "public/media/zerodhaFundhouse.png",

            description: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
        },
        {
            image: "public/media/sensibullLogo.svg",

            description: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
        },
        {
            image: "public/media/tijori.svg",

            description: "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
        },
        {
            image: "public/media/streakLogo.png",

            description: "Systematic trading platform that allows you to create and backtest strategies without coding."
        },
        {
            image: "public/media/smallcaseLogo.png",

            description: "Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
        },
        {
            image: "public/media/dittoLogo.png",

            description: "Personalized advice on life and health insurance. No spam and no mis-selling."
        }
    ];

    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "40px",
            marginTop: "40px"
        }}>
            {features.map((feature, index) => (
                <FeatureCard
                    key={index}
                    image={feature.image}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
    );
};

export default FeaturesGrid;
