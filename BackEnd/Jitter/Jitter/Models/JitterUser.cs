﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Jitter.Models
{
    public class JitterUser
    {
        [Key]
        public int JitterUserId { get; set; }
        [Required]
        [MaxLength(20)]
        [MinLength(3)]
        public string Handle { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Picture { get; set; }
        [MaxLength(161)]
        public string Description { get; set; }
    }
}