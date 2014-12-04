window.onload = function () {

            var $ = jQuery;

            // Usa jQuery para definir el selector donde se ubicará el mapa 
            // según la estructura del bloque
            canvas = $("#mapa-container .block-content");

            var R = Raphael(canvas[0], 650, 300);
            var attr = {
                fill: "#DE5766",
                stroke: "none",
                "stroke-width": 1,
                "stroke-linejoin": "round"
            };

            // El objeto sólamente contiene el string del path i
            // de cada localidad apra facilitar la manipulación posterior
            var bog = {};
            bog.usaquen = "M162.656,119.749c-2.614-38.617-5.201-77.211-7.815-115.823c5.422-1.171,10.823-2.338,16.245-3.509c1.217,0.74,2.454,1.455,3.671,2.198c0.746,2.801,1.521,5.619,2.264,8.418c-0.798,1.941-1.603,3.857-2.399,5.798c5.096-1.092,10.172-2.178,15.246-3.263c1.014,0.794,2.017,1.564,3.023,2.36c0.693-0.075,1.378-0.119,2.047-0.186c0.367,1.475,0.734,2.955,1.098,4.404c-1.37,0.34-2.74,0.682-4.108,1.02c0.729,1.563,1.479,3.091,2.21,4.627c-1.408,1.769-2.824,3.512-4.233,5.279c0.44,2.979,0.863,5.958,1.286,8.962c1.156-0.809,2.29-1.61,3.446-2.396c2.519,1.612,5.063,3.221,7.587,4.856c-0.392,1.117-0.75,2.25-1.131,3.392c-1.973,0.49-3.965,0.983-5.938,1.476c0.244,0.981,0.489,1.969,0.732,2.952c2.721-0.153,5.443-0.307,8.161-0.458c0.775,3.715,1.526,7.434,2.297,11.123c-2.496,0.472-4.999,0.92-7.495,1.364c-0.195,3.978-0.371,7.929-0.541,11.901c-0.405,1.647-0.807,3.312-1.232,4.962c0.677,3.115,1.324,6.238,1.977,9.359c1.49,0.155,3.007,0.3,4.498,0.451c0.352,1.406,0.699,2.813,1.051,4.243c-1.741,0.905-3.514,1.817-5.259,2.723c1.403,7.14,2.823,14.256,4.252,21.386c-2.284,0.52-4.573,1.038-6.835,1.55c0.148,1.682,0.285,3.337,0.43,4.994c-0.813,1.892-1.623,3.785-2.434,5.68c-1.172-0.057-2.34-0.117-3.516-0.174c-0.548-2.003-1.109-3.977-1.675-5.954c-1.446-0.96-2.92-1.937-4.386-2.891c-3.399,0.995-6.816,2.016-10.215,3.01c-0.582-0.256-1.137-0.515-1.721-0.768C169.713,121.778,166.184,120.764,162.656,119.749";
            bog.rafaeluribeuribe = "M104.702,266.631c3.634,3.841,7.273,7.678,10.912,11.52c-0.986,2.182-1.969,4.384-2.924,6.583c3.834,2.75,7.646,5.502,11.473,8.23c0.721,4.783,1.463,9.563,2.186,14.351c1.479-0.591,2.955-1.182,4.43-1.796c-1.086-3.873-2.155-7.781-3.238-11.656c0.892-0.569,1.807-1.146,2.721-1.721c1.188-2.258,2.375-4.514,3.564-6.769c-0.294-1.195-0.592-2.387-0.89-3.578c2.45-0.956,4.893-1.91,7.341-2.868c1.808-4.022,3.591-8.038,5.398-12.066c-3.258-2.315-6.513-4.612-9.77-6.935c-0.531,0.258-1.037,0.509-1.563,0.762c-1.646-0.979-3.293-1.964-4.913-2.929c-0.017-0.466-0.009-0.941-0.004-1.412c-4.302,1.418-8.629,2.837-12.929,4.256c-0.857-0.584-1.698-1.195-2.56-1.778C110.868,261.426,107.771,264.032,104.702,266.631";
            bog.suba = "M150.742,15.995c-6.441,1.499-12.885,2.974-19.303,4.465c-2.42,3.019-4.836,6.06-7.257,9.073c2.532,9.209,5.043,18.42,7.552,27.629c-0.962,2.207-1.95,4.419-2.936,6.63c-1.978,1.413-3.979,2.83-5.975,4.271c-1.963-8.898-3.939-17.769-5.92-26.639c-6.1-5.21-12.19-10.396-18.288-15.604c-3.21,5.429-6.446,10.862-9.657,16.292c2.059,1.207,4.128,2.437,6.191,3.667c-3.406,7.541-6.804,15.108-10.224,22.682c-5.82,1.094-11.666,2.195-17.484,3.296c-2.245,1.825-4.504,3.629-6.72,5.448c-0.052,1.307-0.08,2.584-0.11,3.862c4.663-0.587,9.328-1.146,13.988-1.729c15.581,9.899,31.191,19.792,46.777,29.69c0.645,3.995,1.296,8.019,1.943,12.015c3.681,2.548,7.362,5.119,11.042,7.665c-0.135-1.932-0.242-3.873-0.369-5.783c7.89-1.733,15.805-3.475,23.694-5.209C155.391,83.806,153.065,49.899,150.742,15.995";
            bog.chapinero =    "M162.357,126.418c1.413,23.447,2.816,46.875,4.225,70.324c5.525-1.147,11.057-2.266,16.58-3.415c-0.247-0.985-0.486-1.952-0.732-2.941c-0.108-0.447-0.217-0.87-0.318-1.294c-0.904-0.375-1.822-0.719-2.72-1.074c-0.101-0.898-0.206-1.819-0.308-2.716c0.457-0.914,0.912-1.854,1.395-2.771c0.046-0.711,0.093-1.419,0.154-2.139c1.004-0.597,2.033-1.201,3.034-1.801c-0.476-2.904-0.976-5.802-1.444-8.683c1.497-0.971,3.002-1.919,4.506-2.868c-0.066-1.257-0.16-2.527-0.229-3.788c-1.318-1.07-2.633-2.115-3.95-3.188c0.483-0.92,0.933-1.855,1.415-2.777c-0.211-1.343-0.443-2.684-0.657-4.029c1.372-0.593,2.729-1.151,4.085-1.712c-0.246-0.989-0.49-1.975-0.73-2.941c-1.072-0.659-2.169-1.337-3.264-1.99c2.448-1.403,4.861-2.827,7.307-4.235c-0.947-2.91-1.905-5.795-2.852-8.706c-1.671-2.484-3.336-4.963-5.008-7.448c-3.576,0.988-7.15,2-10.729,2.986C168.872,128.272,165.629,127.354,162.357,126.418";
            bog.engativa =   "M65.65,82.954c0.12,2.39,0.246,4.8,0.364,7.184c1.234,1.666,2.473,3.351,3.729,5.005c-0.904,2.07-1.807,4.138-2.732,6.21c-0.841-0.586-1.686-1.175-2.533-1.787c-0.39,0.321-0.777,0.668-1.196,0.993c-0.95-1.034-1.908-2.064-2.854-3.102c-1.357,1.256-2.684,2.51-4.038,3.771c-1.179-1.454-2.364-2.904-3.538-4.333c-3.822,3.142-7.61,6.299-11.427,9.44c0.856,1.058,1.718,2.114,2.554,3.176c-3.801,0.823-7.592,1.661-11.408,2.512c-1.113-0.771-2.252-1.561-3.363-2.331c-0.399,0.799-0.797,1.591-1.169,2.409c1.682,1.175,3.398,2.369,5.112,3.56c1.394-0.093,2.757-0.207,4.147-0.306c0.086,1.251,0.152,2.508,0.237,3.755c1.548,0.538,3.102,1.073,4.631,1.64c1.194-1.816,2.411-3.613,3.601-5.427c14.865,7.196,29.721,14.369,44.583,21.567c-1.736,2.522-3.471,5.043-5.213,7.547c10.319,9.721,20.614,19.445,30.908,29.173c3.426-8.025,6.855-16.053,10.28-24.079c2.632-5.534,5.265-11.045,7.892-16.581c-4.661-2.653-9.322-5.308-13.984-7.965c-0.699-4.708-1.388-9.396-2.088-14.106c-15.045-9.342-30.087-18.665-45.109-28.01C70.579,82.881,68.1,82.923,65.65,82.954";
            bog.lacandelaria =  "M176.104,222.226c3.146-0.783,6.267-1.556,9.41-2.337c1.584,6.869,3.168,13.736,4.752,20.604c-2.158,1.424-4.322,2.852-6.484,4.277c-1.482-2.759-2.966-5.516-4.447-8.271c-4.494,0.899-8.973,1.768-13.443,2.663c4.106-2.364,8.214-4.73,12.348-7.081C177.52,228.798,176.82,225.507,176.104,222.226";
            bog.fontibon =  "M46.535,120.774c12.488,5.774,24.949,11.56,37.428,17.307c-0.932,2.438-1.847,4.848-2.78,7.286c6.04,5.862,12.064,11.755,18.102,17.62c9.92,8.813,19.864,17.647,29.809,26.457c-2.002,1.418-3.981,2.827-5.982,4.239c-4.363-3.404-8.727-6.809-13.111-10.208c-2.899,4.394-5.794,8.804-8.69,13.217c-7.902-6.786-15.808-13.579-23.711-20.368c-2.14-0.631-4.299-1.237-6.46-1.862c-1.258-0.383-2.541-0.76-3.8-1.14c-1.178,1.332-2.382,2.675-3.561,4.005c-1.507,0.625-2.995,1.216-4.506,1.814c-0.227-0.519-0.478-1.023-0.71-1.557c-2.101,0.519-4.224,1.045-6.328,1.568c0.099,0.793,0.169,1.571,0.269,2.363c-1.039,0.603-2.055,1.204-3.072,1.801c-1.76-1.293-3.494-2.601-5.224-3.883c0.091-1.533,0.186-3.042,0.298-4.585c-3.141,1.125-6.26,2.245-9.371,3.367c-1.244-2.118-2.465-4.224-3.707-6.343c-1.989-0.423-3.981-0.87-5.97-1.293c-0.745-1.204-1.503-2.376-2.276-3.578c2.828-2.783,5.66-5.544,8.488-8.327c-0.693-1.884-1.39-3.796-2.103-5.677c-2.046-0.655-4.088-1.288-6.132-1.944c-0.017-2.057-0.062-4.127-0.102-6.199c1.06,0.084,2.146,0.162,3.205,0.245c-0.142-1.575-0.307-3.146-0.459-4.746c-0.27-0.6-0.53-1.229-0.805-1.854c0.869-0.785,1.717-1.566,2.563-2.348c0.402,0.122,0.78,0.252,1.16,0.381c1.472-1.16,2.935-2.342,4.408-3.5c-0.898-0.819-1.82-1.63-2.713-2.451c3.305-0.348,6.606-0.724,9.917-1.071c-0.167-1.667-0.341-3.363-0.511-5.053c1.148-0.065,2.304-0.101,3.479-0.168c0.385-0.32,0.746-0.661,1.141-0.98C45.321,122.464,45.932,121.618,46.535,120.774";			
            bog.bosa =  "M3.655,236.96c2.299,10.265,4.593,20.503,6.889,30.745c8.765-0.123,17.513-0.243,26.261-0.337c1.799-1.711,3.625-3.423,5.425-5.131c10.363-1.661,20.708-3.288,31.072-4.944c-2.959-1.567-5.919-3.136-8.875-4.698c-1.502,0.126-2.999,0.274-4.473,0.394c-1.657,0.41-3.308,0.822-4.985,1.235c-0.199,1.09-0.397,2.179-0.599,3.265c-3.384,0.497-6.771,0.991-10.155,1.485c-3.642-3.799-7.279-7.617-10.9-11.442c-2.494,1.311-4.988,2.623-7.476,3.932c-1.797-1.163-3.615-2.315-5.409-3.457c0.97-2.664,1.966-5.334,2.934-7.999c2.905-0.944,5.832-1.893,8.761-2.844c1.75,0.482,3.5,0.962,5.273,1.437c0.114-2.329,0.257-4.64,0.371-6.971c-2.192-3.263-4.407-6.498-6.624-9.757c-3.441,1.671-6.911,3.325-10.353,4.994c-3.009-3.16-6.017-6.32-9.027-9.483c-0.991,2.078-2.009,4.16-3.023,6.239c3.058,2.362,6.108,4.692,9.144,7.061C13.142,232.772,8.4,234.866,3.655,236.96";			
            bog.kennedy =  "M77.467,180.565c7.711,6.301,15.395,12.607,23.082,18.91c-1.523,7.098-3.068,14.203-4.598,21.273c2.417,3.112,4.829,6.221,7.265,9.302c-1.859,1.154-3.683,2.305-5.525,3.435c-1.771,6.687-3.515,13.393-5.266,20.072c-4.627,0.802-9.283,1.61-13.912,2.409c-1.596-1.22-3.193-2.441-4.79-3.664c-2.536-0.289-5.103-0.599-7.663-0.886c-1.644-0.513-3.312-1.017-4.988-1.548c-1.373,0.588-2.747,1.154-4.124,1.72c-1.232-0.143-2.444-0.313-3.672-0.455c-0.152,1.303-0.3,2.612-0.452,3.894c-1.898,0.472-3.776,0.938-5.649,1.404c-3.986-3.618-7.95-7.263-11.916-10.908c-1.664,0.414-3.329,0.829-5.015,1.248c-1.085,0.741-2.204,1.466-3.311,2.214c-1.222-0.618-2.445-1.234-3.672-1.874c0.556-1.159,1.086-2.334,1.636-3.518c3.249-1.156,6.494-2.309,9.746-3.465c0.962,0.582,1.921,1.142,2.888,1.722c0.812-0.55,1.618-1.101,2.429-1.648c-0.142-2.974-0.305-5.947-0.442-8.896c2.345-1.979,4.667-3.952,7.013-5.926c-4.72-4.28-9.434-8.532-14.147-12.789c1.074-0.392,2.172-0.764,3.245-1.157c0.313-2.041,0.654-4.092,0.961-6.158c2.755,2.576,5.506,5.13,8.25,7.682c1.707-2.166,3.436-4.313,5.138-6.476c3.031,1.784,6.062,3.572,9.095,5.358c4.779-2.108,9.583-4.197,14.363-6.306c-0.634-2.057-1.263-4.088-1.898-6.148c1.673-0.862,3.349-1.75,5.022-2.616c-1.549-1.931-3.101-3.859-4.648-5.792C73.765,187.51,75.614,184.038,77.467,180.565";
	        bog.usme =  "M142.334,288.58c1.173,1.432,2.369,2.878,3.549,4.329c0.302,3.52,0.584,7.037,0.859,10.538c0.046,0.686,0.098,1.372,0.17,2.077c2.574,1.904,5.144,3.813,7.736,5.71c1.064-0.391,2.131-0.775,3.223-1.148c1.574,4.945,3.147,9.89,4.737,14.809c3.499,1.449,7.017,2.897,10.533,4.341c0.669,3.676,1.329,7.327,2.021,10.996c2.107,0.051,4.22,0.1,6.354,0.142c2.145,3.062,4.307,6.114,6.473,9.167c-0.279,0.771-0.559,1.536-0.812,2.296c-3.69,1.143-7.385,2.283-11.073,3.449c-1.098-2.046-2.175-4.103-3.275-6.145c2.367-0.813,4.729-1.648,7.092-2.461c-0.834-1.063-1.685-2.124-2.549-3.206c-1.602,1.098-3.208,2.193-4.814,3.29c-1.115-1.221-2.238-2.463-3.357-3.681c-1.555,0.287-3.122,0.554-4.68,0.839c0.969,3.001,1.932,5.98,2.918,8.973c-1.186,3.666-2.404,7.333-3.594,10.996c1.87,3.253,3.736,6.478,5.582,9.734c-2.546,0.983-5.115,1.971-7.686,2.958c-1.199-1.549-2.406-3.117-3.625-4.666c-4.542,1.009-9.084,2.012-13.649,3.018c0.787-1.115,1.569-2.234,2.358-3.327c-0.402-3.518-0.803-7.006-1.221-10.494c-1.604-0.876-3.23-1.769-4.854-2.637c-0.458-0.459-0.94-0.914-1.407-1.396c-3,0.646-5.979,1.282-8.984,1.904c0.129-6.04,0.255-12.111,0.376-18.173c-2.271-0.707-4.548-1.415-6.82-2.122c1.11-3.992,2.218-7.983,3.328-11.946c1.29,0.023,2.604,0.051,3.895,0.078c-0.837-5.257-1.663-10.485-2.514-15.711c2.159-1.233,4.317-2.493,6.455-3.724c-0.936-4.281-1.876-8.561-2.813-12.842c1.244-2.052,2.492-4.087,3.732-6.137c1.024-0.154,2.031-0.28,3.051-0.436C140.137,288.178,141.227,288.382,142.334,288.58";
            bog.sumapaz = "M170.604,359.207c1.457,5.36,2.911,10.718,4.367,16.076c8.541-2.336,17.055-4.67,25.592-7.006c-0.672-1.305-1.365-2.583-2.038-3.886c-0.921-1.799-1.839-3.575-2.756-5.373c-1.208-1.945-2.392-3.896-3.579-5.85C184.992,355.175,177.794,357.178,170.604,359.207";
            bog.barriosunidos = "M158.273,120.816c1.092,14.702,2.195,29.435,3.287,44.14c-4.607,1.142-9.219,2.287-13.827,3.433c-6.038-6.502-12.083-13.027-18.124-19.531c2.745-4.88,5.499-9.738,8.223-14.613c-0.094-2.753-0.194-5.53-0.289-8.284C144.445,124.246,151.373,122.531,158.273,120.816";
            bog.teusaquillo = "M160.286,168.802c0.805,9.415,1.63,18.84,2.437,28.277c-5.202,1.29-10.383,2.577-15.589,3.869c-9.361-9.382-18.731-18.79-28.102-28.192c2.959-6.052,5.91-12.124,8.865-18.176c0.069-0.616,0.169-1.217,0.245-1.809c6.486,6.277,12.969,12.528,19.453,18.808C151.828,170.653,156.055,169.729,160.286,168.802";
            bog.losmartires = "M156.23,202.684c2.45,2.889,4.902,5.776,7.355,8.667c-4.021,10.29-8.046,20.552-12.043,30.837c-5.137-2.771-10.242-5.525-15.352-8.306c5.029-8.362,10.06-16.758,15.091-25.123C152.932,206.724,154.584,204.718,156.23,202.684";
            bog.santafe = "M159.387,201.9c7.471-1.629,14.958-3.269,22.432-4.873c-1.871,4.262-3.762,8.554-5.631,12.821c0.633,3.067,1.275,6.136,1.912,9.206c-1.661,0.413-3.322,0.825-4.981,1.238c1.057,3.761,2.124,7.543,3.18,11.301c-4.732,2.343-9.449,4.655-14.159,6.993c0.924,0.913,1.875,1.843,2.796,2.757c3.91-0.848,7.802-1.689,11.71-2.536c1.639,1.903,3.307,3.801,4.947,5.701c-1.039,3.831-2.096,7.671-3.13,11.502c-2.345,0.457-4.71,0.945-7.056,1.406c-6.114-4.717-12.223-9.432-18.359-14.141c4.736-11.331,9.449-22.657,14.162-33.982C164.611,206.836,162.008,204.354,159.387,201.9";
            bog.puentearanda = "M111.228,190.042c4.173,2.195,8.369,4.379,12.57,6.592c3.216-1.744,6.444-3.463,9.644-5.177c5.225,4.936,10.446,9.847,15.666,14.783c-8.144,13.119-16.314,26.223-24.467,39.32c-9.996,2.359-20.015,4.744-30.01,7.104c1.846-5.873,3.662-11.761,5.513-17.634c2.358-1.404,4.72-2.784,7.081-4.192c-2.476-3.755-4.928-7.54-7.406-11.32c1.636-7.21,3.252-14.414,4.887-21.624c0.548-0.606,1.098-1.188,1.645-1.797C107.98,194.079,109.594,192.063,111.228,190.042";
            bog.antonionarino = "M106.68,253.311c2.896,1.215,5.775,2.44,8.648,3.664c5.259-0.96,10.535-1.927,15.788-2.891c2.36,1.916,4.711,3.831,7.074,5.768c1.282,0.375,2.537,0.747,3.794,1.123c1.377,1.251,2.727,2.508,4.094,3.739c0.461-0.557,0.892-1.104,1.343-1.682c1.928-5.482,3.828-10.979,5.761-16.459c-6.736-3.013-13.442-6.007-20.178-9.019c-1.957,2.987-3.887,5.969-5.84,8.979C120.326,248.794,113.518,251.053,106.68,253.311";
            bog.sancristobal = "M155.744,250.432c4.574,3.394,9.176,6.807,13.744,10.207c3.41-0.498,6.795-0.985,10.176-1.501c3.141,3.203,6.25,6.383,9.387,9.561c0.346,1.895,0.714,3.776,1.063,5.67c-1.596,3.424-3.211,6.857-4.81,10.282c-1.232-3.072-2.466-6.149-3.696-9.222c-0.504,0.25-1.04,0.484-1.57,0.739c0.068,1.16,0.101,2.306,0.169,3.462c-2.839,0.807-5.692,1.641-8.528,2.441c0.861,3.973,1.729,7.962,2.588,11.925c1.444-0.355,2.885-0.715,4.304-1.069c1.149,6.929,2.28,13.858,3.411,20.809c-2.94,4.563-5.906,9.13-8.866,13.721c-3.159-1.896-6.296-3.792-9.46-5.688c-1.392-5.109-2.791-10.248-4.183-15.357c-1.333,0.204-2.688,0.414-4.042,0.624c-1.782-1.508-3.549-3.045-5.337-4.58c-0.231-3.225-0.433-6.424-0.638-9.63c-0.801-2.229-1.605-4.483-2.406-6.715c-1.369-0.833-2.732-1.649-4.116-2.456c-2.006,0.373-4.013,0.742-5.993,1.111c-0.166-0.658-0.325-1.294-0.489-1.955c1.981-0.369,3.987-0.764,5.983-1.162c2.979-6.898,5.935-13.789,8.914-20.688C152.827,257.465,154.273,253.95,155.744,250.432";
            bog.ciudadbolivar =  "M39.364,274.749c2.331-0.131,4.635-0.258,6.971-0.366c0.675-1.084,1.325-2.165,2.001-3.248c2.395,1.14,4.812,2.274,7.205,3.39c0.668,3.184,1.356,6.363,2.016,9.521c-0.8,0.074-1.622,0.177-2.423,0.257c0.168,1.566,0.31,3.146,0.482,4.739c2.087,0.398,4.198,0.791,6.281,1.166c0.11,0.445,0.222,0.891,0.331,1.334c-1.85,0.556-3.718,1.145-5.57,1.704c-0.163,0.734-0.351,1.475-0.519,2.211c2.082,1.666,4.139,3.362,6.219,5.028c3.288-2.775,6.597-5.559,9.909-8.34c0.777-0.192,1.55-0.383,2.345-0.581c0.172-1.206,0.348-2.39,0.523-3.601c2.301-1.141,4.605-2.285,6.903-3.425c0.629,2.944,1.249,5.916,1.855,8.864c-1.636,0.53-3.267,1.058-4.907,1.564c0.248,2.495,0.506,4.958,0.775,7.42c-0.487,1.859-0.953,3.687-1.434,5.539c-2.927,2.938-5.857,5.846-8.784,8.778c1.847,0.336,3.699,0.691,5.55,1.027c0.554,2.738,1.112,5.479,1.694,8.23c1.915-1.29,3.839-2.562,5.756-3.857c-0.701-1.912-1.415-3.788-2.114-5.698c1.442,0.09,2.886,0.202,4.302,0.298c0.32,1.304,0.646,2.611,0.968,3.902c-0.855,1.251-1.716,2.505-2.591,3.789c0.488,0.55,1.004,1.116,1.49,1.689c0.656-0.162,1.311-0.327,1.99-0.494c0.533,2.147,1.071,4.32,1.615,6.491c2.065,1.225,4.138,2.446,6.204,3.667c1.186-0.418,2.38-0.816,3.593-1.238c-0.165-0.654-0.324-1.308-0.488-1.962c0.891-0.222,1.758-0.434,2.643-0.657c0.165,0.655,0.329,1.308,0.492,1.965c1.246-0.188,2.487-0.395,3.729-0.581c1.684-5.156,3.345-10.277,5.002-15.401c1.09,0.075,2.178,0.153,3.265,0.23c3.725,2.173,7.445,4.352,11.147,6.556c1.141-0.63,2.273-1.258,3.41-1.887c-2.793-4.142-5.587-8.285-8.385-12.452c-1.428,0.356-2.881,0.716-4.309,1.071c-12.307-13.536-24.617-27.068-36.926-40.601c-3.916,0.846-7.821,1.721-11.74,2.566c-0.914-3.692-1.831-7.38-2.749-11.069c-6.812,0.994-13.621,1.994-20.435,2.988c-1.363,1.604-2.727,3.23-4.118,4.842C38.82,271.661,39.08,273.207,39.364,274.749";
            bog.tunjuelito =  "M67.349,262.457c0.617,2.483,1.232,4.971,1.85,7.454c3.771-0.813,7.535-1.652,11.306-2.462c11.837,13.802,23.671,27.579,35.527,41.352c1.281-0.416,2.574-0.858,3.879-1.282c1.971,3.282,3.969,6.561,5.943,9.841c-1.793-7.222-3.588-14.447-5.384-21.688c-2.013-1.453-4.001-2.903-6.013-4.351c-0.215-0.861-0.429-1.721-0.641-2.579c-1.051-0.554-2.121-1.077-3.168-1.631c-0.264-1.066-0.536-2.159-0.8-3.229c0.815-1.36,1.646-2.699,2.491-4.069c-4.037-4.939-8.086-9.9-12.125-14.842c2.976-2.119,5.956-4.238,8.937-6.333c-2.052-1.218-4.107-2.437-6.158-3.651C91.106,257.494,79.237,259.972,67.349,262.457";

            // Inicia la construcción del set de elementos que conforman el mapa
            R.setStart();
            for(loc in bog) {
                R.path(bog[loc]).attr(attr);
            };
            mapa = R.setFinish();
            
            // Operaciones para rotar el mapa
            var x   = mapa.getBBox().x,
                x2  = mapa.getBBox().x2,
                y   = mapa.getBBox().y,
                y2  = mapa.getBBox().y2;

            var mx = (x+x2)/2,
                my = (y+y2)/2;

            // Se utiliza un metodo deprecado, metodo transform no funciono segun lo esperado
            mapa.rotate(-90,mx,my);
            mapa.translate(30,260);
            
            // Inicia la animación

            colorDefault = "#df5766";

            colorLocalidad = {}
            colorLocalidad.chapinero = "#EDF108"
            colorLocalidad.teusaquillo = "#3f5d4d"
            colorLocalidad.santafe = "#4f5d6a"
            colorLocalidad.losmartires = "#f4f3f2"
            colorLocalidad.lacandelaria = "#323232"
            colorLocalidad.ciudadbolivar = "#4a4a4a"
            colorLocalidad.bosa = "#1f1f1f"

            showEffect = Raphael.animation({'opacity': '1'}, 50);
            hideEffect = Raphael.animation({'opacity': '0'}, 50);


            obj = R.set();

            var callout = function(loc, el, posx, posy, anim) {

                // Reinicia el set de elementos del callout
                obj.remove();

                // Inicializa los elementos del callout para la 
                // localidad seleccionada
                var circulo = R.circle(0,0,50).attr({'opacity': '0', 'fill':'#ffffff', 'stroke-width':'2'}).toFront();
                obj.push(circulo);
                el.attr({'cx': posx, 'cy': posy})


                // Calcula el centro de la localidad
                locx1 = loc.getBBox().x;
                locy1 = loc.getBBox().y;
                locx2 = loc.getBBox().x2;
                locy2 = loc.getBBox().y2;

                cxi = (locx1 + locx2)/2
                cyi = (locy1 + locy2)/2

                var puntoInicial = R.circle(cxi,cyi,5).attr({'opacity': '0', 'fill':'#ffffff', 'stroke':'#ffffff;'}).toFront();
                obj.push(puntoInicial);

                var connector = R.path("M"+cxi+","+cyi+"L"+posx+","+posy).attr({'stroke-width':'2', 'stroke':'#ffffff', 'stroke-dasharray':"-", 'opacity':'0'});
                obj.push(connector);

                return obj.animate(anim);
            }

            // Obtener los datos del nombre del servidor
            var protocol = window.location.protocol;
            var host = window.location.hostname;


            /** 
             * getLocalidades
             *
             * El propósito de esta función es obtener los datos del recurso 
             * localidades via ajax proporcionado por el servidor rest de Drupal
             *
             * @param {string} host - hostname empleado en la petición
             * @param {string} protocol - protocolo empleado en la petición
             * @param {string} filter - nombre de la localidad. default: localidades
             * @param {string} type - formato en que se desea recibir la data. default: json
             */
            function getLocalidades (host, protocol, filter, type) {

                // define valores default;
                var filter = typeof filter !== "undefined" ? filter : "localidades";
                var type = typeof type !== "undefined" ? type : "json";

                // compone la url para acceder al recurso
                var url = protocol+"//"+host+"/?q=data/"+filter+"."+type;

                // inicia la petición ajax usando jQuery
                $.ajax({
                    url: url,
                    dataType: type
                }).done(function (data) {
                    var contenedor = $("#mapa-bogota-actividades");
                    contenedor.empty();

                    for (item in data) {
                        var titulo = data[item].titulo;
                        var link = "/?q=node/"+data[item].nid;
                        var localidad = data[item]["localidad-nombre"];
                        var eje = data[item]["eje-enlace"];
                        var imagen = data[item].imagen;
                        var contenido = data[item].cuerpo;

                        contenedor
                            .append($("<h5></h5>")
                            .append($("<a></a>").html(titulo)).addClass("titulo"))
                            .append($("<div></div>").html(eje).addClass("eje"));

                        if(imagen.length !== 0) contenedor.append(imagen);

                        contenedor
                            .append(contenido)
                            .append($("<div></div>").addClass("clearfix"));
                    }
                });
            }

            // Obtener los datos de la localidad
            getLocalidades(host, protocol);
            
            function entra () {
                localidad = Object.keys(bog)[this.id];
                color = $.isEmptyObject(colorLocalidad[localidad]) ? "#3d3d3d" : colorLocalidad[localidad];
                this.stop().animate({'fill': color}, 500, function (){

                    // Obtener los datos de la localidad
                    getLocalidades(host,protocol,localidad);

                });

                // Se emplean variables globales para ser utlizadas 
                // en el evento de salida del mouse
                cx = (this.getBBox().x) - 35;
                cy = (this.getBBox().y) - 35;

                callout(this, obj, cx, cy, showEffect);

            }

            function sale () {
                this.stop().animate({'fill': colorDefault}, 500);
                callout(this, obj, cx, cy, hideEffect);
            }

            mapa.mouseover(entra);
            mapa.mouseout(sale);

}
