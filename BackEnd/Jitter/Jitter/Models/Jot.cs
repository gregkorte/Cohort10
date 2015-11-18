using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Jitter.Models
{
    public class Jot
    {
        public int JotId { get; set; }

        public string Content { get; set; }

        public DateTime Date { get; set; }

        public object Author { get; set; }

        public string Picture { get; set; }
    }
}