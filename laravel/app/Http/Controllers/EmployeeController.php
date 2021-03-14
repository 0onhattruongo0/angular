<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

use function PHPUnit\Framework\isNull;

class EmployeeController extends Controller
{
    public function getEmployee()
    {
        return response()->json(Employee::all(), 200);
    }

    public function getEmployeeById($id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }
        return response()->json($employee::find($id), 200);
    }

    public function createEmployee(Request $request)
    {
        $employee = Employee::create($request->all());
        return response($employee, 201);
    }
    public function updateEmployee(Request $request, $id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }
        $employee->update($request->all());
        return response($employee, 200);
    }
    public function deleteEmployee($id)
    {
        $employee = Employee::find($id);
        if (!$employee) {
            return response()->json(['message' => 'Employee not found'], 404);
        }
        $employee->delete();
        return response()->json(null, 204);
    }
}
