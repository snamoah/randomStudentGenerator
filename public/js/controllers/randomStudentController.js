function randomStudentController($scope) {
	$scope.path = "public/images/"
	$scope.students = [{name: "Ayo", path: $scope.path + "ayo.jpg"}, 
		{name: "Blessing Onomesino", path: $scope.path +"blessing.jpg"}, 	
		{name: "Esther Olatunde", path: $scope.path +"prince.jpg"}, 
		{name: "Babara Okoto", path: $scope.path +"prince.jpg"},
		{name: "Priscilla Hazel", path: ""},
		{name: "Prince Anim", path: $scope.path+"prince.jpg"},
		{name: "David Evhade", path: ""},
		{name: "Kennedy", path: ""},
		{name: "Ike", path: ""},
		{name: "Innocent", path: ""},
		{name: "Philip Nunoo", path: ""},
		{name: "Cassandra Sarfo", path: ""},
		{name: "Derik Frimpong", path: ""},
		{name: "Panin Tenkorang", path: ""},
		{name: "Paul Damalie", path: ""},
		{name: "Barnabas", path: ""},
		{name: "Laud Bruce Tagoe", path: ""},
		{name: "Laud Bentil", path: ""},
		{name: "Kwame Asiedu", path: ""},
		{name: "Kwame Yeboah", path: ""},
		{name: "Jerry King", path: ""},
		{name: "Kelechi Uduagu", path: ""},
		{name: "Afi Kwao", path: ""},
		{name: "Moses", path: ""}];

	$scope.randomStudents = [" ", " ", " "];

	$scope.generateStudent = function() {
		$scope.randomStudents[0] = $scope.students[Math.floor(Math.random() * $scope.students.length)];
		$scope.randomStudents[1] = $scope.students[Math.floor(Math.random() * $scope.students.length)];
		$scope.randomStudents[2] = $scope.students[Math.floor(Math.random() * $scope.students.length)];
	};
}