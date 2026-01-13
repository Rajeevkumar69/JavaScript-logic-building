const userData = [
     {
          id: 1,
          name: 'A',
          age: 24,
          department: 'Engineering',
          skills: ['Angular', 'TypeScript', 'RxJS'],
          isActive: true,
          address: {
               current: {
                    city: 'Begusarai',
                    state: 'Bihar',
                    pinCode: 851101
               },
               permanent: {
                    city: 'Patna',
                    state: 'Bihar'
               }
          },
          contact: {
               phone: '8789411945',
               email: 'a.engineer@example.com'
          },
          company: {
               name: 'TechNova',
               role: 'Frontend Developer',
               experience: 2
          }
     },
     {
          id: 2,
          name: 'B',
          age: 30,
          department: 'Science',
          skills: ['Python', 'Data Analysis'],
          isActive: false,
          address: {
               current: {
                    city: 'Delhi',
                    state: 'Delhi',
                    pinCode: 110001
               },
               permanent: {
                    city: 'Lucknow',
                    state: 'Uttar Pradesh'
               }
          },
          contact: {
               phone: '8790012345',
               email: 'b.science@example.com'
          },
          company: {
               name: 'DataWorks',
               role: 'Research Analyst',
               experience: 6
          }
     },
     {
          id: 3,
          name: 'A',
          age: 27,
          department: 'Arts',
          skills: ['Content Writing', 'SEO'],
          isActive: true,
          address: {
               current: {
                    city: 'Bengaluru',
                    state: 'Karnataka',
                    pinCode: 560032
               },
               permanent: {
                    city: 'Begusarai',
                    state: 'Bihar'
               }
          },
          contact: {
               phone: '87812511945',
               email: 'a.arts@example.com'
          },
          company: {
               name: 'CreativeHub',
               role: 'Content Strategist',
               experience: 4
          }
     },
     {
          id: 4,
          name: 'C',
          age: 35,
          department: 'Management',
          skills: ['Leadership', 'Agile', 'Scrum'],
          isActive: true,
          address: {
               current: {
                    city: 'Mumbai',
                    state: 'Maharashtra',
                    pinCode: 400001
               },
               permanent: {
                    city: 'Pune',
                    state: 'Maharashtra'
               }
          },
          contact: {
               phone: '8800123456',
               email: 'c.manager@example.com'
          },
          company: {
               name: 'BizCorp',
               role: 'Project Manager',
               experience: 10
          }
     },
     {
          id: 5,
          name: 'D',
          age: 22,
          department: 'Engineering',
          skills: ['JavaScript', 'HTML', 'CSS', 'TypeScript'],
          isActive: false,
          address: {
               current: {
                    city: 'Kolkata',
                    state: 'West Bengal',
                    pinCode: 700001
               },
               permanent: {
                    city: 'Howrah',
                    state: 'West Bengal'
               }
          },
          contact: {
               phone: '8899011223',
               email: 'd.junior@example.com'
          },
          company: {
               name: 'WebStart',
               role: 'Trainee Developer',
               experience: 0
          }
     }
];

export default userData;