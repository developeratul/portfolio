import workProcess from "../../data/workProcess";

function WorkProcess() {
  return (
    <section className="work_process">
      <div className="container">
        <h2 className="title">My Work Process</h2>

        <div className="work_process_content_wrapper">
          {workProcess.map((process, index) => {
            return (
              <div
                className="single_process"
                key={index}
                data-aos={process.animation}
              >
                <div className="icon">{process.icon}</div>
                <div className="desc">
                  <h2>{process.title}</h2>
                  <p>{process.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;
