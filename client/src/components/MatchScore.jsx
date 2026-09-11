const MatchScore = ({
    score
}) => {

    return (
        <div className="match-score">
            <strong>
                {score}% Match
            </strong>
        </div>
    );
};

export default MatchScore;