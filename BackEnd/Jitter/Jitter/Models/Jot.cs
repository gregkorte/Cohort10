using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Jitter.Models
{
    public class Jot : IComparable
    {
        public JitterUser Author { get; set; }
        [Key]
        public int JotId { get; set; }
        [Required]
        public string Content { get; set; }
        public DateTime Date { get; set; }
        public string Picture { get; set; }

        public int CompareTo(object obj)
        {
            Jot other_jot = obj as Jot;
            // Multiply time -1 because DateTime's CompareTo sorts ascedndingly by default.
            // We want to sort Jots descendingly.
        return -1*(this.Date.CompareTo(other_jot.Date));
        }
    }
}