const StepsRight = () => {
  const steps = [
    { id: 1, step: 1 },
    { id: 2, step: 2 },
    { id: 3, step: 3 },
  ];
  return (
    <div className='steps__list__right'>
      {steps.map((step) => {
        return (
          <div key={step.id} className='steps__list__right__item'>
            <h4>Planning</h4>
            <p>
              Our team examines your requirements and expectations, takes
              account of your needs, and creates a preliminary plan for your
              approval
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default StepsRight;
