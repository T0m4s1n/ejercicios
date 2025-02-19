//Ejercicios de colores del globalcss el 19/02/2025 tomasin
export default function TaskList() {
  const tasks = [
    { text: "take out the trash", completed: true, time: "9:00 AM" },
    { text: "do homework", completed: true, time: "12:00 PM" },
    { text: "go to grocery store", completed: false, time: "1:00 PM" },
    { text: "run 5 kilometers", completed: false, time: "4:20 PM" },
    { text: "load the dishwasher", completed: false, time: "8:00 PM" },
    { text: "Take out the trash", completed: false, time: "9:00 AM" },
  ];

  return (
    <span className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
      <ul className="bg-bg-secondary p-6 rounded-xl shadow-lg w-96 max-w-md">
        <ul className="flex justify-between text-sm text-text-secondary">
          <span>Tue Feb 18 2025</span>
          <span>9:31:25 PM</span>
        </ul>
        <h2 className="text-xl font-bold text-text-primary mt-2">List Tailwind</h2>
        <span className="flex justify-between text-text-secondary text-sm mt-3 mb-4">
          {['s', 'm', 't', 'w', 't', 'f', 's'].map((day, index) => (
            <ul key={index} className="flex flex-col items-center">
              <span className="text-xs mb-1">{day}</span>
              <span className="font-medium">{24 + index}</span>
            </ul>
          ))}
        </span>
        <span className="mt-5 space-y-2">
          {tasks.map((task, index) => (
            <ul key={index} className="flex justify-between">
              <span
                className={`flex items-center p-3 rounded-lg ${
                  task.completed ? 'bg-blue-100' : 'bg-blue-100 border border-border-color'
                }`}
                style={{ width: '67%' }}
              >
                <span
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    task.completed ? 'bg-green-500' : 'bg-white border border-border-color'
                  }`}
                >
                  {task.completed && <span className="text-white">✓</span>}
                </span>
                <ul
                  className={`ml-3 ${task.completed ? "text-accent-color line-through" : "text-text-primary"}`}
                >
                  {task.text}
                </ul>
              </span>
              <span 
                className="bg-blue-100 p-3 rounded-lg font-medium text-center"
                style={{ width: '30%', color: 'var(--accent-color)' }}
              >
                {task.time}
              </span>
            </ul>
          ))}
        </span>
      </ul>
    </span>
  );
}