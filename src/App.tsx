import reactionImg from '/src/assets/images/icon-reaction.svg';
import memoryImg from '/src/assets/images/icon-memory.svg';
import verbalImg from '/src/assets/images/icon-verbal.svg';
import visualImg from '/src/assets/images/icon-visual.svg';

function App() {
	return (
		<>
			<div className='master'>
				<div className='card'>
					<div className='left'>
						<div className='left-head'>Your Result</div>
						<div className='result'>
							<div className='top'>76</div>
							<div className='bot'>of 100</div>
						</div>
						<div className='great'>Great</div>
						<div className='description'>
							<p>You scored higher than 65% of</p>
							<p>the people who have taken</p>
							<p>these tests.</p>
						</div>
					</div>
					<div className='right'>
						<div className='right-head'>
							<div>Summary</div>
						</div>
						<div
							className='subject'
							id='Reaction'>
							<div>
								<img
									src={reactionImg}
									alt=''
								/>
								Reaction
							</div>
							<div className='marks'>
								<div className='mark'>80&nbsp;</div> / 100
							</div>
						</div>
						<div
							className='subject'
							id='Memory'>
							<div>
								<img
									src={memoryImg}
									alt=''
								/>
								Memory
							</div>
							<div className='marks'>
								<div className='mark'>92&nbsp;</div> / 100
							</div>
						</div>
						<div
							className='subject'
							id='Verbal'>
							<div>
								<img
									src={verbalImg}
									alt=''
								/>
								Verbal
							</div>
							<div className='marks'>
								<div className='mark'>61&nbsp;</div> / 100
							</div>
						</div>
						<div
							className='subject'
							id='Visual'>
							<div>
								<img
									src={visualImg}
									alt=''
								/>
								Visual
							</div>
							<div className='marks'>
								<div className='mark'>72&nbsp;</div> / 100
							</div>
						</div>
						<button>Continue</button>
					</div>
				</div>
			</div>
			<div className='footer'>
				Challenge by
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					target='_blank'
					rel='noopener'>
					Frontend Mentor
				</a>
				. Coded by <a href='#'>Your Name Here</a>.
			</div>
		</>
	);
}

export default App;
