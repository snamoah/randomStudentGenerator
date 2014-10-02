function randomStudentController($scope) {
	$scope.path = "public/images/"
	$scope.students = [{name: "Ayo", path: $scope.path + "ayo.jpg"}, 
		{name: "Blessing Onomesino", path: $scope.path +"blessing.jpg"}, 	
		{name: "Esther Olatunde", path: $scope.path +"prince.jpg"}, 
		{name: "Babara Okoto", path: $scope.path +"prince.jpg"},
		{name: "Priscilla Hazel", path: ""},
		{name: "David Evhade", path: ""},
		{name: "Kennedy", path: ""},
		{name: "Ike", path: ""},
		{name: "Innocent", path: ""},
		{name: "Philip Nunoo", path: ""},
		{name: ""}];

	$scope.randomStudents = [" ", " ", " "];

	$scope.generateStudent = function() {
		$scope.randomStudents[0] = $scope.students[Math.floor(Math.random() * $scope.students.length)];

		var student = "";
		while(student == $scope.randomStudents[0]){
			$scope.randomStudents[1] = $scope.students[Math.floor(Math.random() * $scope.students.length)];
		}

		student = "";
		while(student == $scope.randomStudents[0] || student == $scope.randomStudents[1]) {
			$scope.randomStudents[2] = $scope.students[Math.floor(Math.random() * $scope.students.length)];
		}
	};
}