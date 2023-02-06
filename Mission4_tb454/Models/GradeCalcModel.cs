using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4_tb454.Models
{
    public class GradeCalcModel
    {
        [Range(1,100)] // Put the data validation here! maybe "Assignment > 0" "Assignment < 100"
        public double Assignment { get; set; }
        [Range(1, 100)]
        public double Group_Project { get; set; }
        [Range(1, 100)]
        public double Quiz { get; set; }
        [Range(1, 100)]
        public double Midterm { get; set; }
        [Range(1, 100)]
        public double Final_Exam { get; set; }
        [Range(1, 100)]
        public double Intex { get; set; }
    }
}
